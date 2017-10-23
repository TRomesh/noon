import {
  GET_POSTS,
  LIKE_POST,
  ERROR_POSTS,
  DELETE_LIKED_POST
} from "../constants/postConstants";

// states of posts
const initialState = {
  posts: [],
  error:false
};

// switch case to select Action type
export default function Chat(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state, { senderror:false,posts:state.posts.concat(action.payload) });
    case LIKE_POST:
      return Object.assign({}, state, { posts:state.posts.concat(action.payload) });
    case ERROR_POSTS:
      return Object.assign({}, state, { posts: action.payload });
    case DELETE_LIKED_POST:
      return Object.assign({}, state, { posts: action.payload });
    default:
      return state;
  }
}
