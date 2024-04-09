import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_SUCCESS,
} from "../actions/album.actions";

let initState = {
  albums: [],
  loading: true,
  success: false,
};

export const AlbumReducer = (state = initState, action) => {
  switch (action?.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.data,
        loading: false,
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
