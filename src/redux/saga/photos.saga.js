import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPhotosData } from "../api/photos.api";
import {
  FETCH_PHOTOS,
  fetchPhotosFailure,
  fetchPhotosSuccess,
} from "../actions/photos.actions";

function* getPhotos(action) {
  try {    
    const { albumId } = action.payload;
    console.log({albumId})
    const allPhotoList = yield call(fetchPhotosData);    

    const photosList = allPhotoList.filter(
      (photo) => photo?.albumId == albumId
    );
    yield put(fetchPhotosSuccess(photosList));
  } catch (err) {
    console.log("Exection occers while fetching photos data", { err });
    yield put(fetchPhotosFailure());
  }
}

export default function* PhotosSaga() {
  yield takeLatest(FETCH_PHOTOS, getPhotos);
}
