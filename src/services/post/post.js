import Modal  from "../../components/Modal.vue"
import MyButton from "../../components/button/MyButton.vue"
export default {
    components:{
        Modal,
        MyButton,
    },
    data(){
        return{
            show:false,
            edit:false,
            deleteIndex:-1
        }
    },
    name: "Post",
    created() {
      this.getPostList();
    },
    methods: {
      getPostList() {
        this.$store.dispatch("getPostList");
      },
      editPost(post) {
        this.$store.dispatch("addPost", post);
        this.$router.push({ name: "CreatePost", params: { isEdit: true } });
      },
      deletePost(){
        this.$store.dispatch("deletePost",this.deleteIndex)
        console.log(this.deleteIndex)
      },
      showModal(index){
        this.edit=false;
        this.deleteIndex=index;
        this.show=true
      }
    },
  };
  