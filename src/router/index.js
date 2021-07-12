import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import User from "../views/user/User.vue";
import Post from "../views/post/Post.vue";
import Todo from "../views/todo/Todo.vue";
import CreateAcc from "../views/auth/CreateAcc.vue";
import store from "../store";
import UserDetail from "../views/user/UserDetail.vue";
import TodoDetail from "../views/todo/TodoDetail.vue";
import CreatePost from "../views/post/CreatePost.vue";
import PostDetail from "../views/post/PostDetail.vue";
import CreateTodo from "../views/todo/CreateTodo.vue";
import CreateUser from "../views/user/CreateUser.vue";
import AuthUser from "../views/auth/AuthUser.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Post,
    beforeEnter: (to, from, next) => {
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/auth-user",
    name: "AuthUser",
    component: AuthUser,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/users",
    name: "Users",
    component: User,
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: CreateUser,
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todo,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/todo/:id",
    name: "TodoDetail",
    component: TodoDetail,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/create-todo",
    name: "CreateTodo",
    component: CreateTodo,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/createacc",
    name: "CreateAcc",
    component: CreateAcc,
    beforeEnter: (to, from, next) => {
     
      if (store.state.userModule.isLogin === true) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
