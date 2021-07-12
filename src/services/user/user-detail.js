export default {
    name: "UserDetail",
    created() {
      this.$store.dispatch("userModule/getUserByID", this.$route.params.id);
    },
  };
  