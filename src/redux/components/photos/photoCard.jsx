import { Col, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PhotoCards = ({ photo }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOnCLick = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <Col style={{ position: "relative", display: "grid" }}>
        <div className="card-group ps-2 pe-2">
          <div className="card border-color">
            <Link href="#" role="link" onClick={() => handleOnCLick()}>
              <img
                src={photo.url}
                className="card-img-top"
                alt="..."
                height="200"
              />
            </Link>

            <Modal show={showPopup}>
              <Modal.Header closeButton onClick={() => handleOnCLick()}>
                <Modal.Title>Preview Image</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ position: "relative", display: "contents" }}>
                <img src={photo.url} />
              </Modal.Body>
            </Modal>

            <div className="card-body">
              <h5 className="card-title">{photo.title}</h5>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};
export default PhotoCards;
