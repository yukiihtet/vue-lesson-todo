<template>
  <form @submit.prevent="createPost" class="container">
      {{post}}
      <div>
          <label for="id">Id</label>
          <input type="text" name="id" v-model="post.id" />
          <span class="error" v-if="v$.post.id.$error">{{
        v$.post.id.$errors[0].$message
      }}</span>
      </div>
      <div>
          <label for="title">Title</label>
          <input type="text" name="title" v-model="post.title" />
          <span class="error" v-if="v$.post.title.$error">{{
        v$.post.title.$errors[0].$message
      }}</span>
      </div>
      
       
      <button>{{Boolean(isEdit) === true ?'Update Post' :'Create Post'}}</button>
  </form>
</template>

<script src="../../services/post/create-post.js">

</script>

<style>
.error{
    background:red;
    color: #ffff
}
</style>