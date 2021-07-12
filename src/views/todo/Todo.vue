<template>
  <router-link :to="{ name: 'CreateTodo' }" 
    ><MyButton label="Create Todo" 
  /></router-link>
  <div v-for="(todo, index) in $store.state.todoModule.todos" :key="index">
    <h1>{{ todo.id }}</h1>
    <h3>{{ todo.completed}}</h3>
    <!-- <button @click="$store.dispatch('deleteTodo',todo.id)">Delete Todo</button> -->
    
      <router-link :to="{ name: 'TodoDetail', params: { id: todo.id } }" v-show="!$store.state.userModule.isFreeUser">
        <MyButton  label="View Todos" /></router-link>

     <MyButton v-show="!$store.state.userModule.isFreeUser"
      @click="$store.dispatch('todoModule/deleteTodo',todo.id)"
      label="Delete Todos"
    />
     <MyButton v-show="!$store.state.userModule.isFreeUser"
      @click="editTodo(todo)"
      label="Edit Todo"
    />
  </div>
</template>

<script src="../../services/todo/todo.js" />

<style>

</style>
