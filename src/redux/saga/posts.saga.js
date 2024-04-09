import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_POST,
  FETCH_POSTS,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../actions/posts.actions";
import { createNewPost, fetchPostsData } from "../api/posts.api";

function* getPosts(action) {
  try {
    const { userId } = action.payload;
    const postsList = yield call(fetchPostsData);

    const userPostList = postsList.filter((post) => post?.userId === userId);    

    yield put(fetchPostsSuccess(userPostList));
  } catch (err) {
    console.log("Exection occers while fetching posts data", { err });
    yield put(fetchPostsFailure());
  }
}

function* createPost(action) {
  const { onSuccess, onFailure } = action;
  try {
    const { userId, title, body } = action;
    let createPostResponse = yield call(createNewPost, { userId, title, body });        
    onSuccess(createPostResponse);
  } catch (err) {
    console.log("Exection occers while creating post", { err });
    onFailure(err);
  }
}

export default function* PostsSaga() {
  yield takeLatest(FETCH_POSTS, getPosts);
  yield takeLatest(CREATE_POST, createPost);
}
