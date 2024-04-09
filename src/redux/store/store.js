import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { UserReducer } from "../reducers/user.reducer";
import { AlbumReducer } from "../reducers/album.reducer";
import { PhotosReducer } from "../reducers/photos.reducer";
import { PostsReducer } from "../reducers/posts.reducer";
import { CommentsReducer } from "../reducers/comments.reducer";

import RootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  UserReducer,
  AlbumReducer,
  PhotosReducer,
  PostsReducer,
  CommentsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(RootSaga);

export default store;
