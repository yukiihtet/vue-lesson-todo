import axios from "axios";
import BASE_URL from "../../const/Constants";

const postAPI = {
  createPost,
  updatePost,
  deletePost,
  getPostList,
  getPostByID,
};

function createPost(post) {
  return axios.post(`${BASE_URL}posts`, post);
}

function updatePost(post){
  return axios.put(`${BASE_URL}posts/${post.id}`,post)
}

function deletePost(id){
  return axios.delete(`${BASE_URL}posts/${id}`)
}

function getPostList(){
  return axios.get(`${BASE_URL}posts`)
}

function getPostByID(id){
  return axios.get(`${BASE_URL}posts/${id}`)
}

export default postAPI;
