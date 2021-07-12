<template>
  <div class="navbar" v-if="$store.state.userModule.isLogin === true">
    <router-link :to="{ name: 'Posts' }">Posts</router-link>
    <router-link :to="{ name: 'Todos' }">Todos</router-link>

    <!-- <router-link v-if="$store.state.userModule.loginUser.role == 'admin' && !$store.state.userModule.isFreeUser " :to="{ name: 'Users' }">Users</router-link> -->
    <router-link
      v-if="!$store.state.userModule.isFreeUser"
      :to="{ name: 'Users' }"
      >Users</router-link
    >
    <router-link
      v-if="!$store.state.userModule.isFreeUser"
      :to="{ name: 'AuthUser' }"
      >All User Account</router-link
    >
    <!-- <router-link
      v-if="$store.state.userModule.isFreeUser"
      :to="{ name: 'CreateAcc' }"
      >Create Account</router-link
    >
     -->

    <MyButton 
      @click="logout"
      :label="$store.state.userModule.isFreeUser ? 'Login' : 'Logout'"
      :extraStyle="{ background: 'orange' }"
    />&nbsp;&nbsp;&nbsp;

    <MyButton v-show="$store.state.userModule.isFreeUser "
      @click="createUserAccount"
      label="Create Account"
      :extraStyle="{ background: 'orange' }"
    />
  <div v-show="!$store.state.userModule.isFreeUser">
    <h1>{{ $store.state.userModule.loginUser.name }}</h1>
  </div>
  
  </div>
  <div v-else class="navbar">
    <h1>Vue Tutorial</h1>
  </div>
</template>

<script>
import MyButton from "../button/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  methods: {
    logout() {
      // console.log(this.$store)
      this.$store.dispatch("userModule/userLogout", false);
      this.$router.push({ name: "Login" });
    },
    
    createUserAccount() {
      this.$router.push({ name: "CreateAcc" });
    },
  },
};
</script>

<style scoped>
.navbar {
  background: yellow;
  padding: 20px;
}
.navbar a {
  font-weight: bold;
  color: teal;
  margin: auto 4px;
  font-size: 18px;
  text-decoration: none;
}

h1 {
  font-weight: bold;
  color: teal;
}

.navbar a.router-link-exact-active {
  color: violet;
}
</style>