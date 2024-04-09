import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../actions/comments.actions";
import { useEffect } from "react";

export const Comments = ({ postId }) => {
  const dispatch = useDispatch();

  const commentsResults = useSelector((state) => {
    return {
      comments: state?.CommentsReducer?.comments,
      loading: state?.CommentsReducer?.loading,
    };
  });

  useEffect(() => {
    dispatch(fetchComments({ postId }));
  }, [postId]);

  return (
    <div>
      {!commentsResults?.loading && (
        <ul class="list-group list-group-flush text-left">
          <hr />
          {commentsResults?.comments.map((comment) => (
            <li class="list-group-item">
              <b>Email: {comment.email}</b>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
