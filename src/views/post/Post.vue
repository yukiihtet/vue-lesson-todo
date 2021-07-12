<template>
  <h2>Posts Page</h2>

  <router-link :to="{ name: 'CreatePost' }" 
  v-show="!$store.state.userModule.isFreeUser"
    ><MyButton label="Create Post"
  /></router-link>

  <div v-for="(post, index) in $store.state.postModule.posts" :key="index">
    <h1>{{ post.id }}</h1>
    <h3>{{ post.title }}</h3>
    
    <router-link :to="{ name: 'PostDetail', params: { id: post.id } }"
       v-show="!$store.state.userModule.isFreeUser"
        ><MyButton label="View Post" /></router-link
      >
    
    <MyButton   v-show="!$store.state.userModule.isFreeUser"
      class="button delete"
      @click="showModal(post.id)"
      label="Delete"
    />
    <MyButton v-show="!$store.state.userModule.isFreeUser"
     @click="editPost(post)"
      label="Edit Post"
    />
    
  </div>

  <teleport v-if="show == true" to="#modal">
    <Modal @close="show = false" @delete="deletePost()">
      "Are u sure u want to delete"
    </Modal>
  </teleport>
</template>

<script src="../../services/post/post.js" />


<style>
</style>