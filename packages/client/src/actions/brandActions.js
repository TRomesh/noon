import {
  ADD_BRANDS,
  GET_BRANDS,
  SEARCH_BRAND,
  LIKE_BRAND,
  GET_LIKED_BRANDS,
  ERROR_BRANDS,
  DELETE_LIKED_BRAND
} from "../constants/brandConstants";
import axios from "axios";

const Service = process.env.REACT_APP_SERVER;

/**
 * Add brands
 * @param data
 * @returns {{type, payload: *}}
 */
function addbrand(data) {
  return {
    type: ADD_BRANDS,
    data: data
  };
}

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
 * Get liked brands
 * @param data
 * @returns {{type, payload: *}}
 */
function getlikedbrand(data) {
  return {
    type: GET_LIKED_BRANDS,
    data: data
  };
}

/**
 * Get brands
 * @param data
 * @returns {{type, payload: *}}
 */
function searchbrand(data) {
  return {
    type: SEARCH_BRAND,
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
  
export const AddBrands = () => {
    return dispatch => {
      return axios
        .post(`${Service}/addbrand`)
        .then(data => dispatch(getbrand(data)))
        .catch(error => dispatch(errorbrands(error)));
    };
};

export const GetBrands = () => {
  return dispatch => {
    return axios
      .get(`${Service}/getallbrand`)
      .then(data => dispatch(getbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const GetLikedBrands = () => {
  return dispatch => {
    return axios
      .get(`${Service}/getalllikedbrand`)
      .then(data => dispatch(getbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const SearchBrand = (brand) => {
  return dispatch => {
    return axios
      .get(`${Service}/serachbrand`,{ params:brand})
      .then(data => dispatch(searchbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const LikeBrand = brand => {
  return dispatch => {
    return axios
      .post(`${Service}/likebrand`, brand)
      .then(data => dispatch(likebrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};

export const DeleteLikedPost = brand => {
  return dispatch => {
    return axios
      .delete(`${Service}/deletelikedbrand`, {
        data: brand,
        params: { force: true }
      })
      .then(data => dispatch(deletelikedbrand(data)))
      .catch(error => dispatch(errorbrands(error)));
  };
};
