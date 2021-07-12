import { required, maxLength } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import MyButton from "../../components/button/MyButton.vue";
export default {
  name: "CreateAcc",

  components: {
    MyButton,
  },

  created() {
    if (this.$route.params.isEdit) {
      this.isEdit = this.$route.params.isEdit;
      this.user = this.$store.state.userModule.user;
    }
  },
  data() {
    return {
      v$: useValidate(),
      isEdit: false,
      user: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  validations: {
    user: {
      name: { required },
      email: { required },
      password: { required, maxLength: maxLength(8) },
      // roll:{required}
    },
  },

  methods: {
    createUserAccount() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("userModule/updateAccount", this.user);
          this.$router.push({ name: "AuthUser" });
        } else {
          this.$store.dispatch("userModule/createUserAccount", this.user);
          if (this.$store.state.userModule.isUserExist === false) {
            console.log("is exist", this.$store.state.userModule.isUserExist);
            this.$router.push({ name: "Login" });
          }
        }
       } else {
        console.log("error");
      }
    },
  },
};
