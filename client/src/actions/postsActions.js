import { FETCH_ALL_POSTS, CREATE_POST } from "../constants/postConstants";
import * as api from "../api/index.js";

// Action Creators
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.log('getAllPost error',error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data })
  } catch (error) {
    console.log('create', error.message);
  }
}
