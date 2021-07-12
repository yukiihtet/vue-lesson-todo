<template>
<button v-if="$store.state.userModule.loginUser.role == 'admin'"> 
<router-link :to="{ name: 'CreateAcc' }" v-show="$store.state.userModule.loginUser.role == 'admin'"
    >Create Account
  </router-link>
</button>
  <div
    v-for="(user, index) in $store.state.userModule.authUser"
    :key="index"
  >
    <h1>Name - {{ user.name }}</h1>
    <h2>Email - {{ user.email }}</h2>
    <h3>Role - {{ user.role }}</h3>
    <h3>User Password - {{ user.password }}</h3>
    <!-- <MyButton v-show="$store.state.userModule.loginUser.role == 'admin'"
      @click="$store.dispatch('userModule/deleteAuthUser',user.email)"
      label="Delete Account"
    /> -->

    <MyButton   v-show="$store.state.userModule.loginUser.role == 'admin' 
    && $store.state.userModule.loginUser.email !== user.email" 
      class="button delete"
      @click="showModal(user.email)"
      label="Delete"
    />
     <MyButton v-show="$store.state.userModule.loginUser.role == 'admin' || $store.state.userModule.loginUser.email === user.email"  
      @click="editAccount(user)"

      label="Edit Account"
    />

   
    <hr/>
  </div>
<teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deleteAuthUser()">
      "Are u sure u want to delete"
    </Modal>
  </teleport>

</template>

<script >
import MyButton from '../../components/button/MyButton.vue'
import Modal  from "../../components/Modal.vue"
export default {
  name: "AuthUser",
  components:{
    MyButton,
    Modal,
  },
 
    data(){
      return{
         show:false,
      edit:false,
      deleteIndex:-1
      }
    },
  
  methods:{
    editAccount(user) {
      this.$store.dispatch("userModule/addUser", user);
      this.$router.push({ name: "CreateAcc", params: { isEdit: true } });
    },

    deleteAuthUser(){
      this.$store.dispatch("userModule/deleteAuthUser",this.deleteIndex)
      console.log(this.deleteIndex)
    },
    showModal(index){
      this.edit=false;
      this.deleteIndex=index;
      this.show=true
    }
  }
};
</script>

<style>
</style>