import axios from "axios";
import { ADD_POST, GET_ERRORS, POST_LOADING, GET_POSTS } from "./types";

// Add post
export const addPost = postData => dispatch => {
	axios
		.post("/api/posts", postData)
		.then(res =>
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
// get posts
export const getPosts = () => dispatch => {
	axios
		.get("/api/posts")
		.then(res =>
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_POSTS,
				payload: null
			})
		);
};

export const setPostLoading = () => {
	return {
		type: POST_LOADING
	};
};
