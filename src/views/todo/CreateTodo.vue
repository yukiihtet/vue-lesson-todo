<template>
  <form @submit.prevent="createTodo">
      {{todo}}
    <div>
      <label for="id">ID</label>
      <input type="text" name="id" v-model="todo.id" />
    </div>
    <div>
      <label for="complete">Completed</label>
      <input type="text" name="completed" v-model="todo.completed" />
    </div>
    
    <button>{{Boolean(isEdit) === true ?'Update Todo':'Create Todo'}}</button>
  </form>  
</template>

<script src="../../services/todo/create-todo.js" />

<style>
</style>