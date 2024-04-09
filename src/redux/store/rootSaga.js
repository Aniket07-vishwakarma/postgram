import { all, fork } from "redux-saga/effects";
import AlbumSaga from "../saga/albums.saga";
import UserSaga from "../saga/user.saga";
import PhotosSaga from "../saga/photos.saga";
import PostsSaga from "../saga/posts.saga";
import CommentsSaga from "../saga/comments.saga";

export default function* RootSaga() {
  yield all([
    fork(PhotosSaga),
    fork(AlbumSaga),
    fork(UserSaga),
    fork(PostsSaga),
    fork(CommentsSaga),
  ]);
}
