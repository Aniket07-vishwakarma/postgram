import { Col } from "react-bootstrap";

export const AlbumCards = ({ album }) => {
  const firstLetter = album.title.toUpperCase();

  return (
    <div>
      {/* {" "} */}
      <Col>
        <div className="card-group mt-2 p-2" style={{ height: "275px" }}>
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
    </div>
  );
};
export default AlbumCards;
