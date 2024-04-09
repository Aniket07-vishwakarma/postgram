import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_COMMENTS,
  fetchCommentsFailure,
  fetchCommentsSuccess,
} from "../actions/comments.actions";
import { fetchCommentsData } from "../api/comments.api";

function* getComments(action) {
  try {
    const { postId } = action.payload;
    const allCommentList = yield call(fetchCommentsData);

    const commentList = allCommentList.filter(
      (comment) => comment?.postId == postId
    );

    yield put(fetchCommentsSuccess(commentList));
  } catch (err) {
    console.log("Exection occers while fetching comments data", { err });
    yield put(fetchCommentsFailure());
  }
}

export default function* CommentsSaga() {
  yield takeLatest(FETCH_COMMENTS, getComments);
}
