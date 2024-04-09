export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const fetchComments = ({ postId }) => {
  return {
    type: FETCH_COMMENTS,
    payload: {
      postId,
    },
  };
};

export const fetchCommentsSuccess = (data) => ({
  type: FETCH_COMMENTS_SUCCESS,
  data,
});

export const fetchCommentsFailure = () => ({ type: FETCH_COMMENTS_FAILURE });
