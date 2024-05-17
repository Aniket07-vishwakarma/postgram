import { Col } from "react-bootstrap";

export const AlbumCards = ({ album }) => {
  const firstLetter = album.title.toUpperCase();

  return (
    <>      
      <Col style={{ position: "relative", display: "grid" }}>
        <div className="card-group ps-2 pe-2">
          <div className="card border-color">
            <p className="centered" style={{ fontSize: "65px" }}>
              {firstLetter[0]}
            </p>

            <hr />
            <a
              className="card-body nav-link"
              href={`${window.location.href}/${album?.id}`}
            >
              <h5 className="card-title">{album?.title}</h5>
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};
export default AlbumCards;
