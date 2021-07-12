import { mapActions } from "vuex";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";

export default {
  name: "Auth",
  components: {
    MyButton,
    MyInput,
  },
  methods: {
    ...mapActions("userModule", ["login"]),
    loginUser() {
      this.login(this.user);
      this.$router.push({ name: "Posts" });
    },
    goToHome(){
     this.$router.push({ name: 'Posts',params:{isFree:true} })
     this.login(true)
    },
    
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
};