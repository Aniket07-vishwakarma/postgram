import { useState } from "react";
import Comments from "../comments/comments";

export const PostCard = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div class="card text-left mt-1 mb-2">
      <div class="card-header text-left">{post.title}</div>
      <div class="card-body text-left">
        <p class="card-text text-left">{post.body}</p>
        {/* <a href="#" class="card-link">Card link</a> */}
        <a class="btn btn-link" onClick={() => setOpenComment(!openComment)}>
          Comments
        </a>
        {openComment && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default PostCard;
