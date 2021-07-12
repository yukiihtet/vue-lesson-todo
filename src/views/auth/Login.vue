<template>

  <form @submit.prevent="loginUser()">
    <div>
      <MyInput label="Email" placeHolder="Email" v-model="user.email" />
    </div>
    <div>
      <MyInput
        label="Password"
        placeHolder="Password"
        inputType="password"
        v-model="user.password"
      />
    </div>
    <div>
      <MyButton label="Login" />
    </div>
  </form>
<span class="free-user" @click="goToHome()">Continue as free user</span>
</template>

<script src="../../services/auth/auth.js" />

<style soped>
.free-user {
  color:green;
  text-decoration: underline;
}
</style>