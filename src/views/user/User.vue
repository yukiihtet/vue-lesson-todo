<template>
  <h2>Users Page</h2>
<router-link :to="{ name: 'CreateUser' }"
    ><MyButton label="Create User"
  /></router-link>
  <div v-for="(user, index) in $store.state.userModule.users" :key="index"
  >
    <h1 >{{ user.id }}</h1>
    <h3>{{ user.email }}</h3>

    <router-link :to="{ name: 'UserDetail', params: { id: user.id } }"
     v-show="$store.state.userModule.loginUser.role == 'admin'"
     ><MyButton label="View Users"
    /></router-link>
    <MyButton  v-show="$store.state.userModule.loginUser.role == 'admin'"
      class="button delete"
      @click="showModal(user.id)"
      label="Delete User"
    />
     <MyButton  v-show="$store.state.userModule.loginUser.role == 'admin'"
      @click="editUser(user)"
      label="Edit user"
    />
  </div>

  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deleteUser()">
      "Are u sure u want to delete"
    </Modal>
  </teleport>
</template>

<script src="../../services/user/user.js" />


<style>
</style>