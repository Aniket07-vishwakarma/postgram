import {
  CREATE_POST,
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../actions/posts.actions";

let initState = {
  posts: [],
  loading: true,
  success: false,
};

export const PostsReducer = (state = initState, action) => {
  switch (action?.type) {
    case FETCH_POSTS:
    case CREATE_POST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
