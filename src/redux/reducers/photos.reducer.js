import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_SUCCESS,
} from "../actions/photos.actions";

let initState = {
  photos: [],
  loading: true,
  success: false,
};

export const PhotosReducer = (state = initState, action) => {
  switch (action?.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.data,
        loading: false,
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
