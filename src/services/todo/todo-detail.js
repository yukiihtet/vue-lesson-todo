export default {
    name: "TodoDetail",
    created() {
      this.$store.dispatch("todoModule/getTodoByID", this.$route.params.id);
    },
  };
  