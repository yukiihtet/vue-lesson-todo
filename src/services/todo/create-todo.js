import MyButton from '../../components/button/MyButton.vue'
import MyInput from '../../components/input/MyInput.vue'
export default {
    components:{
        MyButton,
        MyInput ,
    },
    name: "CreateTodo",
    created() {
      if (this.$route.params.isEdit) {
        this.isEdit = this.$route.params.isEdit;
        this.todo = this.$store.state.todoModule.todo
      }
   },
    data() {
      return {
        isEdit: false,
        todo: {
          id: "",
          completed: "",
        },
      };
    },
    methods: {
      createTodo() {
        if (Boolean(this.isEdit) === true) {
          this.$store.dispatch("todoModule/updateTodo", this.todo);
        } else {
          this.$store.dispatch("todoModule/createTodo", this.todo);
        }
        this.$router.push({ name: "Todos" });
      },
    },
  };
  