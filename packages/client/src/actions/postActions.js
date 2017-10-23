import {
  GET_POSTS,
  LIKE_POST,
  ERROR_POSTS,
  DELETE_LIKED_POST
} from "../constants/postConstants";
import axios from "axios";

const Service = process.env.REACT_APP_SERVER;

/**
 * Get posts
 * @param data
 * @returns {{type, payload: *}}
 */
function getpost(data) {
  return {
    type: GET_POSTS,
    data: data
  };
}

/**
 * Like post
 * @param data
 * @returns {{type, payload: *}}
 */
function likepost(data) {
  return {
    type: LIKE_POST,
    data: data
  };
}

/**
 * Delete Liked post
 * @param data
 * @returns {{type, payload: *}}
 */
function deletelikedpost(data) {
  return {
    type: DELETE_LIKED_POST,
    data: data
  };
}

/**
 * Error in post requests
 * @param data
 * @returns {{type, payload: *}}
 */
function errorposts(data) {
  return {
    type: ERROR_POSTS,
    data: data
  };
}

export const GetPosts = () => {
  return dispatch => {
    return axios
      .get(`${Service}/getallpost`, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(getpost(data)))
      .catch(error => dispatch(errorposts(error)));
  };
};

export const LikePost = post => {
  return dispatch => {
    return axios
      .post(`${Service}/likepost`, post, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(likepost(data)))
      .catch(error => dispatch(errorposts(error)));
  };
};

export const DeleteLikedPost = post => {
  return dispatch => {
    return axios
      .delete(`${Service}/deletelikedpost`, {
        data: post,
        params: { force: true },
        headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(deletelikedpost(data)))
      .catch(error => dispatch(errorposts(error)));
  };
};
