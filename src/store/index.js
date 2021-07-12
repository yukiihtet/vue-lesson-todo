import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import postAPI from "../api/post/post";
import todoAPI from "../api/todo/todo";
import userAPI from "../api/user/user";

const userModule = {
  namespaced: true,
  state: () => ({
    users: [],
    user: {},
    isUserExist: false,
    authUser: [
      {
        name: "User",
        email: "user@gmail.com",
        password: "password",
        role: "user",
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: "password",
        role: "admin",
      },
      {
        name: "Super Admin",
        email: "superadmin@gmail.com",
        password: "password",
        role: "admin",
      },
    ],
    loggedUsers: [
      {
        name: "User",
        email: "user@gmail.com",
        password: "password",
        role: "user",
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        password:"admin123",
        role: "admin",
      },
    ],
   
    loginUser: {},
    isLogin: false,
  }),
  mutations: {
    login(state, loginUser) {
      if (typeof loginUser === "boolean") {
        state.isLogin = loginUser;
        state.isFreeUser = true;
      } else {
        let index = state.authUser.findIndex((user) => {
          return (
            user.email === loginUser.email &&
            user.password === loginUser.password
          );
        });
        console.log(state.authUser)
        console.log(index)
        if (index != -1) {
          state.loginUser = state.authUser[index];
          state.isLogin = true;
          state.isFreeUser = false;
        }
      }
    },

    
    userLogout(state, logout) {
      state.isLogin = logout;
    },

    getUserList(state, users) {
      state.users = users;
    },
    getUserByID(state, user) {
      state.user = user;
    },
    deleteUser(state, id) {
      const index = state.users.findIndex((user) => {
        return user.id === id;
      });
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    deleteAuthUser(state,email){
     
      
      const index = state. authUser.findIndex((user)=>{
        return user.email === email;
      });
      if(index !== -1){
        state.authUser.splice(index,1)
    
    }
    },
    AddUser(state, user) {
      state.user = user;
    },
    
    updateUser(state, updateuser) {
      const index = state.users.findIndex((user) => {
        return user.id === updateuser.id;
      });
      if (index !== -1) {
        state.users[index] = updateuser;
      }
    },
    updateAccount(state,updateaccount){
      const index = state.authUser.findIndex((user)=>{
        return user.email === updateaccount.email;
      });
      if(index !==  -1){
        state.loggedUsers[index] = updateaccount;
      }
    },
    

    createUserAccount(state, newUser) {
      //using filter
      // const result = state.authUser.filter((user) => {
      //   return user.email === newUser.email;
      // });
      // if(result.length === 0){
      //   state.authUser.push(newUser)
      // }

      //using findIndex
      const index = state.authUser.findIndex((user) => 
      user.email === newUser.email
      );
      console.log(index)
      if (index === -1) {
        state.authUser.push(newUser);
        state.isUserExist = false;
      } else {
        console.log('user exist')
        state.isUserExist = true;
      }
    },
  },
  actions: {
    login({ commit }, user) {
      commit("login", user);
    },
    userLogout({ commit }, logout) {
      commit("userLogout", logout);
    },

    getUserList({ commit }) {
      userAPI.getUserList().then((response) => {
        commit("getUserList", response.data);
      });
    },
    getUserByID({ commit }, id) {
      userAPI.getUserByID(id).then((response) => {
        commit("getUserByID", response.data);
      });
    },
    deleteUser({ commit }, id) {
      userAPI.deleteUser(id).then((response) => {
        console.log(response);
        commit("deleteUser", id);
      });
    },
    deleteAuthUser({commit},email){
      commit("deleteAuthUser",email)
    },

    updateUser({ commit }, user) {
      userAPI.updateUser(user).then((response) => {
        console.log(response);
        commit("updateUser", user);
      });
    },
    updateAccount({commit},authUser){
      commit("updateAccount",authUser)
    },
   
    createUser({ commit }, user) {
      userAPI.createUser(user).then((response) => {
        console.log(response);
        commit("createUser", user);
      });
    },

    addUser({ commit }, user) {
      commit("AddUser", user);
    },
    

    createUserAccount({ commit }, user) {
      commit("createUserAccount", user);
    },
  },
  getters: {
    loggedUsers: (state) => {
      return state.loggedUsers;
    },
  },
};
const postModule = {
  state: () => ({
    posts: [],
    post: {},
  }),
  mutations: {
    getPostList(state, posts) {
      state.posts = posts;
    },
    getPostByID(state, post) {
      state.post = post;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    updatePost(state, updatepost) {
      const index = state.posts.findIndex((post) => {
        return post.id === updatepost.id;
      });
      if (index !== -1) {
        state.posts[index] = updatepost;
      }
    },
    deletePost(state, id) {
      const index = state.posts.findIndex((post) => {
        return post.id === id;
      });
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
    AddPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    getPostList({ commit }) {
      postAPI.getPostList().then((response) => {
        commit("getPostList", response.data);
      });
    },
    getPostByID({ commit }, id) {
      postAPI.getPostByID(id).then((response) => {
        commit("getPostByID", response.data);
      });
    },
    createPost({ commit }, post) {
      postAPI.createPost(post).then((response) => {
        console.log(response);
        commit("createPost", post);
      });
    },
    updatePost({ commit }, post) {
      postAPI.updatePost(post).then((response) => {
        console.log(response);
        commit("updatePost", post);
      });
    },
    deletePost({ commit }, id) {
      postAPI.deletePost(id).then((response) => {
        console.log(response);
        commit("deletePost", id);
      });
    },
    addPost({ commit }, post) {
      commit("AddPost", post);
    },
  },
};

const todoModule = {
  namespaced: true,
  state: () => ({
    todos: [],
    todo: {},
  }),
  mutations: {
    getTodoList(state, todos) {
      state.todos = todos;
    },
    getTodoByID(state, todo) {
      state.todo = todo;
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    createTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, updatetodo) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === updatetodo.id;
      });
      if (index !== -1) {
        state.todos[index] = updatetodo;
      }
    },
    AddTodo(state, todo) {
      state.todo = todo;
    },
  },
  actions: {
    getTodoList({ commit }) {
      todoAPI.getTodoList().then((response) => {
        commit("getTodoList", response.data);
      });
    },
    getTodoByID({ commit }, id) {
      todoAPI.getTodoByID(id).then((response) => {
        commit("getTodoByID", response.data);
      });
    },
    deleteTodo({ commit }, id) {
      todoAPI.deleteTodo(id).then((response) => {
        console.log(response);
        commit("deleteTodo", id);
      });
    },

    createTodo({ commit }, todo) {
      todoAPI.createTodo(todo).then((response) => {
        console.log(response);
        commit("createTodo", todo);
      });
    },
    updateTodo({ commit }, todo) {
      todoAPI.updateTodo(todo).then((response) => {
        console.log(response);
        commit("updateTodo", todo);
      });
    },
    addTodo({ commit }, todo) {
      commit("AddTodo", todo);
    },
  },
  getters: {
    todoData(state) {
      return state.todos;
    },
  },
};

const store = new createStore({
  modules: {
    userModule,
    postModule,
    todoModule,
  },
  plugins: [createPersistedState()],
});
export default store;
