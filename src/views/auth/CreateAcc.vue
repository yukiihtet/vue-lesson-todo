
<template>
  <form @submit.prevent="createUserAccount" class="container">
      
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="user.name" />
      <span class="error" v-if="v$.user.name.$error">{{
        v$.user.name.$errors[0].$message
      }}</span>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" v-model="user.email" />
      <span class="error" v-if="v$.user.email.$error">{{
        v$.user.email.$errors[0].$message
      }}</span>
    </div>
    <div v-if="!$store.state.userModule.isFreeUser ">
      <label for="roll">Roll</label>
      <input type="text" name="roll" v-model="user.roll" />
      
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" v-model="user.password" />
      <span class="error" v-if="v$.user.password.$error">{{
        v$.user.password.$errors[0].$message
      }}</span>
    </div>
    <span v-if="$store.state.userModule.isUserExist">Email Already Exist</span>
    <MyButton
    :label="Boolean(isEdit) === true ?'Update Account':'Create Account'"
    />
  </form>
</template>

<script src="../../services/auth/create-auth.js" />

<style>
.error{
    background:red;
    color: #ffff
}
</style>