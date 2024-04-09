import { useState } from "react";
import Comments from "../comments/comments";

export const PostCard = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div class="card mt-1 mb-2">
      <div class="card-header">{post.title}</div>
      <div class="card-body">
        <p class="card-text">{post.body}</p>
        <button
          type="button"
          class="btn btn-primary btn-sm"
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
