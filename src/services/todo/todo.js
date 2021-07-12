import { mapGetters } from "vuex";
import MyButton from '../../components/button/MyButton.vue'

export default {
  components:{
    MyButton,
  },
    name: "Todo",
    created() {
      this.$store.dispatch("todoModule/getTodoList");
    },
    computed:{
      ...mapGetters("todoModule",["todoData"])
    },
    methods:{
    editTodo(todo) {
      this.$store.dispatch("todoModule/addTodo", todo);
      this.$router.push({ name: "CreateTodo", params: { isEdit: true } });
     
    }
    }, 
  };
  