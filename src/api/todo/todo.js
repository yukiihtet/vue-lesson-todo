import axios from "axios";
import BASE_URL from "../../const/Constants";

const todoAPI = {
  getTodoList,
  getTodoByID,
  deleteTodo,
  createTodo,
  updateTodo
};

function getTodoList() {
  return axios.get(`${BASE_URL}todos`);
}

function getTodoByID(id){
    return axios.get(`${BASE_URL}todos/${id}`)
}
function deleteTodo(id){
    return axios.delete(`${BASE_URL}todos/${id}`)
  }
  function createTodo(todo) {
    return axios.post(`${BASE_URL}todos`, todo);
  }
  
  function updateTodo(todo){
    return axios.put(`${BASE_URL}todos/${todo.id}`,todo)
    
  }
export default todoAPI;