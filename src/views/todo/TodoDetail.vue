<template>
  <h1>{{ $store.state.todoModule.todo.id }}</h1>
  <h1>{{ $store.state.todoModule.todo.title }}</h1>
   <h1>{{ $store.state.todoModule.todo.completed }}</h1>
</template>

<script src="../../services/todo/todo-detail.js"/>

<style>
</style>