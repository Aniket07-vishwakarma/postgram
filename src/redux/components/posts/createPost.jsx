import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  createPostFailure,
  createPostSuccess,
} from "../../actions/posts.actions";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export const CreatePost = ({ handleOnClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  let userId = useSelector((state) => {
    return state?.UserReducer?.user?.id;
  });

  const onSuccess = (data) => {
    console.log("In Create post SUCCESS" + JSON.stringify(data));
    dispatch(createPostSuccess());
  };
  const onFailure = (data) => {
    console.log("In Create post FAILURE" + JSON.stringify(data));
    dispatch(createPostFailure());
  };

  const handleSubmit = () => {
    console.log(title, body);
    dispatch(
      createPost({ userId: userId || 1, title, body }, onSuccess, onFailure)
    );
    handleOnClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleOnClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          style={{ background: "#5F9EA0", color: "white" }}
          onClick={() => handleSubmit()}
          disabled={title && body ? false : true}
        >
          Create
        </Button>
      </Modal.Footer>
    </>
  );
};

export default CreatePost;
