import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_ALBUMS,  
  fetchAlbumsFailure,
  fetchAlbumsSuccess,
} from "../actions/album.actions";
import { fetchAlbumsData } from "../api/albums.api";

function* getAlbums(action) {
  try {    
    const { userId } = action.payload;
    const albumList = yield call(fetchAlbumsData);    
    const userAlbumList = albumList.filter((album) => album?.userId === userId);    

    yield put(fetchAlbumsSuccess(userAlbumList));
  } catch (err) {
    console.log("Exection occers while fetching album data", { err });
    yield put(fetchAlbumsFailure());
  }
}

export default function* AlbumSaga() {
  yield takeLatest(FETCH_ALBUMS, getAlbums);
}
