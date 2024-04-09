import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from "../actions/comments.actions";

let initState = {
  comments: [],
  loading: true,
  success: false,
};

export const CommentsReducer = (state = initState, action) => {
  switch (action?.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.data,
        loading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
