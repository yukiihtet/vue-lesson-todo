import { required, minLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  
    name: "CreatePost",
    created() {
      if (this.$route.params.isEdit) {
        this.isEdit = this.$route.params.isEdit;
        this.post = this.$store.state.postModule.post
      }
    },
    data() {
      return {
        isEdit: false,
        v$: useValidate(),
        post: {
          id: "",
          title: "",
    },
      };
    },
    validations: {
        post: {
          id: { required },
          title: { required, minLength: minLength(3) },
      
         
        },
      },
    methods: {
      createPost() {
        this.v$.$validate();
        if(!this.v$.$error){
            console.log('success')
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("updatePost", this.post);
        } else {
          this.$store.dispatch("createPost", this.post);
        }
        this.$router.push({ name: "Posts" });
    }else{
        console.log("error")
    }
      },
    },
  };
  