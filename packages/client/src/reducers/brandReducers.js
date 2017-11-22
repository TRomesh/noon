import {
  GET_BRANDS,
  LIKE_BRAND,
  ERROR_BRANDS,
  DELETE_LIKED_BRAND
} from "../constants/postConstants";

// states of brand
const initialState = {
  brand: [],
  error:false
};

// switch case to select Action type
export default function Chat(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return Object.assign({}, state, { senderror:false,brand:state.brand.concat(action.payload) });
    case LIKE_BRAND:
      return Object.assign({}, state, { brand:state.brand.concat(action.payload) });
    case ERROR_BRANDS:
      return Object.assign({}, state, { brand: action.payload });
    case DELETE_LIKED_BRAND:
      return Object.assign({}, state, { brand: action.payload });
    default:
      return state;
  }
}
