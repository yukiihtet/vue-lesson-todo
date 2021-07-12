<template>
  <h1>{{ $store.state.postModule.post.id }}</h1>
  <h3>{{ $store.state.postModule.post.title }}</h3>
  <h3>{{ $store.state.postModule.post.body }}</h3>
</template>

<script src="../../services/post/post-detail.js"/>

<style>
</style>