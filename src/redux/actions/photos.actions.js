export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const fetchPhotos = ({ albumId }) => {
  return {
    type: FETCH_PHOTOS,
    payload: {
      albumId,
    },
  };
};

export const fetchPhotosSuccess = (data) => ({
  type: FETCH_PHOTOS_SUCCESS,
  data,
});

export const fetchPhotosFailure = () => ({ type: FETCH_PHOTOS_FAILURE });
