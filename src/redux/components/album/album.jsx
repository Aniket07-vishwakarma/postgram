import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../actions/album.actions.js";
import { Row } from "react-bootstrap";
import { AlbumCards } from "./albumCards.jsx";

export const Album = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => {
    return state?.UserReducer?.user?.id;
  });

  const albumsResult = useSelector((state) => {
    return state?.AlbumReducer;
  });

  useEffect(() => {
    if (userId) {
      dispatch(fetchAlbums({ userId: userId }));
    } else {
      const { id } = JSON.parse(sessionStorage.getItem("user"));
      dispatch(fetchAlbums({ userId: id }));
    }
  }, [userId]);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {albumsResult?.albums?.map((album) => (
        <AlbumCards key={album.id} album={album} />
      ))}
    </Row>
  );
};
