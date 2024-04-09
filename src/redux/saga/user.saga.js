import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCH_USERS,
  LOGIN_USER,
  fetchUsersFailure,
  fetchUsersSuccess,
  loginUserFailure,
  loginUserSuccess,
} from "../actions/user.action";
import { fetchUsersData } from "../api/user.api";

const usersList = [
  {
    id: 1,
    name: "Aniket",
    username: "Ani",
    email: "aniket.vishwakarma@happiestminds.com",
    role: "admin",
    password: "12345",
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    role: "admin",
    password: "12345",
  },
  {
    id: 3,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    role: "consumer",
    password: "12345",
  },
  {
    id: 4,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    role: "consumer",
    password: "12345",
  },
];

function* loginUser(action) {
  try {
    const { email, password } = action?.payload;
    const filterUser = usersList.filter(
      (user) => user?.email === email && user?.password === password
    );

    const user = filterUser[0];

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })
    );
    yield put(loginUserSuccess(user));
  } catch (err) {
    console.log("Unable to login.", { err });
    yield put(loginUserFailure());
  }
}

function* getUsers() {
  try {
    const userList = yield call(fetchUsersData);

    yield put(fetchUsersSuccess(userList));
  } catch (err) {
    console.log("Exection occers while fetching album data", { err });
    yield put(fetchUsersFailure());
  }
}

export default function* UserSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(FETCH_USERS, getUsers);
}
