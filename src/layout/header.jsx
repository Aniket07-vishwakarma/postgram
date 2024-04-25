import { useSelector } from "react-redux";
import { BsPersonCircle, BsCamera2 } from "react-icons/bs";
import AppRoutes from "../redux/routes/appRoutes";
import Dropdown from "react-bootstrap/Dropdown";
import { LoginUser } from "../redux/components/loginUser/Login";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Header = () => {
  let albumButton, postButton, userButton;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (window.location.href.includes("albums")) {
    albumButton = "active";
    postButton = "";
    userButton = "";
  } else if (window.location.href.includes("posts")) {
    albumButton = "";
    postButton = "active";
    userButton = "";
  } else if (window.location.href.includes("users")) {
    albumButton = "";
    postButton = "";
    userButton = "active";
  }

  // const login = useSelector((state) => state.UserReducer.login);
  let profile = useSelector((state) => state.UserReducer.user);

  if (!profile.id) {
    profile = JSON.parse(sessionStorage.getItem("user"));
  }

  if (profile?.id) {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light ps-4 pe-2"
          style={{ background: "#5F9EA0", color: "white" }}
        >
          <a
            className="navbar-brand mb-1"
            href={`${window.location.origin}/albums`}
          >
            <BsCamera2 style={{ color: "white" }} />
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active ">
                <a
                  className="nav-link text-light"
                  href={`${window.location.origin}/about`}
                >
                  About App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              <BsPersonCircle />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleShow}>Profile</Dropdown.Item>
              <Dropdown.Item
                href={`${window.location.origin}/login`}
                onClick={() => sessionStorage.clear()}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>User Id:</b> {profile.id ?? 1}
          </Modal.Body>
          <Modal.Body>
            <b>Name:</b> {profile.name ?? "Leanne Graham"}
          </Modal.Body>
          <Modal.Body>
            <b>Email:</b> {profile.email ?? "Sincere@april.biz"}
          </Modal.Body>
          <Modal.Body>
            <b>Role:</b> {profile.role ?? "Admin"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container-fluid mt-1">
          <div className="row" style={{ height: "570px" }}>
            <div
              className="col-2 border border-color"
              style={{ textAlign: "center", backgroundColor: "#e6e6ff" }}
            >
              <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="nav-item">
                  <a
                    href={`${window.location.origin}/albums`}
                    className={`nav-link text-dark ${albumButton}`}
                    aria-current="page"
                  >
                    ALBUMS
                  </a>
                </li>
                <li>
                  <a
                    href={`${window.location.origin}/posts`}
                    className={`nav-link text-dark ${postButton}`}
                  >
                    POSTS
                  </a>
                </li>
                {profile.role === "admin" && (
                  <li>
                    <a
                      href={`${window.location.origin}/users`}
                      className={`nav-link text-dark ${userButton}`}
                    >
                      USERS
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div
              className="col-10"
              style={{ height: "100%", overflow: "scroll" }}
            >
              <div className="container ">
                <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <LoginUser />
      </div>
    );
  }
};
