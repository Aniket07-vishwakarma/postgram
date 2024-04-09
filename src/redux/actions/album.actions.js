export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const fetchAlbums = ({ userId }) => {
  return {
    type: FETCH_ALBUMS,
    payload: {
      userId,
    },
  };
};

export const fetchAlbumsSuccess = (data) => ({
  type: FETCH_ALBUMS_SUCCESS,
  data,
});

export const fetchAlbumsFailure = () => ({ type: FETCH_ALBUMS_FAILURE });
