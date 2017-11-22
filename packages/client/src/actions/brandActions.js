import {
  GET_BRANDS,
  LIKE_BRAND,
  ERROR_BRANDS,
  DELETE_LIKED_BRAND
} from "../constants/brandConstants";
import axios from "axios";

const Service = process.env.REACT_APP_SERVER;

/**
 * Get brands
 * @param data
 * @returns {{type, payload: *}}
 */
function getbrand(data) {
  return {
    type: GET_BRANDS,
    data: data
  };
}

/**
 * Like brand
 * @param data
 * @returns {{type, payload: *}}
 */
function likebrand(data) {
  return {
    type: LIKE_BRAND,
    data: data
  };
}

/**
 * Delete Liked brand
 * @param data
 * @returns {{type, payload: *}}
 */
function deletelikedbrand(data) {
  return {
    type: DELETE_LIKED_BRAND,
    data: data
  };
}

/**
 * Error in brand requests
 * @param data
 * @returns {{type, payload: *}}
 */
function errorbrands(data) {
  return {
    type: ERROR_BRANDS,
    data: data
  };
}

export const GetPosts = () => {
  return dispatch => {
    return axios
      .get(`${Service}/getallbrand`, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(getbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const LikePost = brand => {
  return dispatch => {
    return axios
      .brand(`${Service}/likebrand`, brand, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(likebrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const DeleteLikedPost = brand => {
  return dispatch => {
    return axios
      .delete(`${Service}/deletelikedbrand`, {
        data: brand,
        params: { force: true },
        headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") }
      })
      .then(data => dispatch(deletelikedbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};
