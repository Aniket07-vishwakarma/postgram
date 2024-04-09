import React from "react";
import { Modal } from "react-bootstrap";
function PhotoPopup({ imageUrl }) {
  const [isShow, invokeModal] = React.useState(true);
  const initModal = () => {
    return invokeModal(!isShow);
  };
  return (
    <>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Preview Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} style={{ height: "470px" }} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PhotoPopup;
