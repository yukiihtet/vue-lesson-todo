import MyButton from "../../components/button/MyButton.vue";
//import MyInput from "../../components/input/MyInput.vue";

export default {
  name: "PostDetail",
  components: {
    MyButton,
    
  },
  created() {
    this.getPostDetail();
  },
  methods: {
    getPostDetail() {
      this.$store.dispatch("getPostByID", this.$route.params.id);
    },
  },

}