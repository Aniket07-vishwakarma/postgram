export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const GET_USERS = "GET_USERS";

export const loginUser = ({ email, password }) => ({
  type: LOGIN_USER,
  payload: {
    email,
    password,
  },
});

export const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data,
});

export const loginUserFailure = (data) => ({
  type: LOGIN_USER_FAILURE,
  data,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  data,
});

export const fetchUsersFailure = () => ({ type: FETCH_USERS_FAILURE });
