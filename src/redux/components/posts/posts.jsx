import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/posts.actions";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import CreatePost from "./createPost";

export const Posts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  let userId = useSelector((state) => {
    return state?.UserReducer?.user?.id;
  });

  const postsResults = useSelector((state) => {
    return state?.PostsReducer?.posts;
  });

  useEffect(() => {
    if (userId) {
      dispatch(fetchPosts({ userId }));
    } else {
      const { id } = JSON.parse(sessionStorage.getItem("user"));
      dispatch(fetchPosts({ userId: id }));
    }
  }, [userId]);

  return (
    <div>
      {postsResults?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div
        style={{
          position: "fixed",
          bottom: "5px",
          right: "20px",
          margin: "0",
          padding: "5px 3px",
        }}
      >
        <button
          type="button"
          class="btn"
          style={{ background: "#5F9EA0", color: "white" }}
          onClick={handleShow}
        >
          +
        </button>

        <Modal show={show} onHide={handleClose}>
          <CreatePost handleOnClose={handleClose} />
        </Modal>
      </div>
    </div>
  );
};

export default Posts;
