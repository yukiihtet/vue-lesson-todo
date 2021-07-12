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
    name: "User",
    created() {
      this.getUserList();
    },
    methods: {
      getUserList() {
        this.$store.dispatch("userModule/getUserList");
      },
      editUser(user) {
        this.$store.dispatch("userModule/addUser", user);
        this.$router.push({ name: "CreateUser", params: { isEdit: true } });
      },
      deleteUser(){
        this.$store.dispatch("userModule/deleteUser",this.deleteIndex)
        console.log(this.deleteIndex)
      },
      showModal(index){
        this.edit=false;
        this.deleteIndex=index;
        this.show=true
      }
    },
  };
  