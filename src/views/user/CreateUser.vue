<template>
  <form @submit.prevent="createUser" class="container">
      {{user}}
      <div>
          <label for="id">Id</label>
          <input type="text" name="id" v-model="user.id" />
          <span class="error" v-if="v$.user.id.$error">{{
        v$.user.id.$errors[0].$message
      }}</span>
      </div>
      <div>
          <label for="email">Email</label>
          <input type="email" name="email" v-model="user.email" />
          <span class="error" v-if="v$.user.email.$error">{{
        v$.user.email.$errors[0].$message
      }}</span>
      </div>
      
       
      <button>{{Boolean(isEdit) === true ?'Update User' :'Create User'}}</button>
  </form>
</template>

<script src="../../services/user/create-user.js">

</script>

<style>
.error{
    background:red;
    color: #ffff
}
</style>