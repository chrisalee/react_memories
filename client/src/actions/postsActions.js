import { FETCH_ALL_POSTS, CREATE_POST, UPDATE_POST, LIKE_POST, DELETE_POST } from "../constants/postConstants";
import * as api from "../api/index.js";

// Action Creators
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.log('getallposts error', error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data })
  } catch (error) {
    console.log('createpost error', error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE_POST, payload: data })
  } catch (error) {
    console.log('update post', error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log('like post error', error)
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log('dislike post error', error);
  }
};