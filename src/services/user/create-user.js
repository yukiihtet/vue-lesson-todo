
import { required, minLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";

export default {
  
    name: "CreatePost",
    created() {
      if (this.$route.params.isEdit) {
        this.isEdit = this.$route.params.isEdit;
        this.user = this.$store.state.userModule.user
      }
    },
    data() {
      return {
        isEdit: false,
        v$: useValidate(),
        user: {
          id: "",
          email: "",
    },
      };
    },
    validations: {
        user: {
          id: { required },
          email: { required, minLength: minLength(3) },
      
         
        },
      },
    methods: {
      createUser() {
        this.v$.$validate();
        if(!this.v$.$error){
            console.log('success')
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("userModule/updateUser", this.user);
        } else {
           this.$store.dispatch("userModule/createUser", this.user);
        }
        this.$router.push({ name: "Users" });
    }else{
        console.log("error")
    }
      },
    },
  };
  