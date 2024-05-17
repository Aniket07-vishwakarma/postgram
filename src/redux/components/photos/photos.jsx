import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { fetchPhotos } from "../../actions/photos.actions.js";
import { PhotoCards } from "./photoCard.jsx";

export const Photos = () => {
  const dispatch = useDispatch();
  let albumId = window.location.pathname.split("/")[2];

  const photosResult = useSelector((state) => {
    return state?.PhotosReducer;
  });

  useEffect(() => {
    dispatch(fetchPhotos({ albumId }));
  }, [albumId]);

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {photosResult?.photos?.map((photo) => (
          <PhotoCards key={photo.id} photo={photo} />
        ))}
      </Row>      
    </>
  );
};
