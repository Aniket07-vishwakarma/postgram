import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../actions/user.action";

let initState = {
  users: [],
  user: {},
  loading: true,
  success: false,
  login: false,
};

export const UserReducer = (state = initState, action) => {
  switch (action?.type) {
    case LOGIN_USER:
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
        login: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading: false,
      };
    case LOGIN_USER_FAILURE:
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
      };
    default:
      return state;
  }
};
