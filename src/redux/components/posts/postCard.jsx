import { useState } from "react";
import Comments from "../comments/comments";

export const PostCard = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div className="card mt-1 mb-2">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setOpenComment(!openComment)}
        >
          Comments
        </button>
        {openComment && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default PostCard;
