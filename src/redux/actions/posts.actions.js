export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const fetchPosts = ({ userId }) => {
  return {
    type: FETCH_POSTS,
    payload: {
      userId,
    },
  };
};

export const fetchPostsSuccess = (data) => ({
  type: FETCH_POSTS_SUCCESS,
  data,
});

export const fetchPostsFailure = () => ({ type: FETCH_POSTS_FAILURE });

export const createPost = (
  { userId, title, body },
  onSuccess,
  onFailure
) => {
  return {
    type: CREATE_POST,
    userId,
    title,
    body,
    onSuccess,
    onFailure,
  };
};

export const createPostSuccess = (data) => ({
  type: CREATE_POST_SUCCESS,
  data,
});

export const createPostFailure = () => ({ type: CREATE_POST_FAILURE });
