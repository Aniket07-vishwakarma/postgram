import { Col } from "react-bootstrap";
import PhotoPopup from "./photoPopup";
import { useState } from "react";

export const PhotoCards = ({ photo }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOnCLick = () => {
    setShowPopup(true);
  };
  return (
    <div>
      {/* {" "} */}
      <Col>
        <div className="card-group mt-2 p-2" style={{ height: "330px" }}>
          <div className="card border-color">
            <a onClick={() => handleOnCLick()}>
              <img
                src={photo.url}
                className="card-img-top"
                alt="..."
                height="200"
              />
            </a>
            {showPopup && <PhotoPopup imageUrl={photo.url} />}
            <div className="card-body">
              <h5 className="card-title">{photo.title}</h5>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};
export default PhotoCards;
