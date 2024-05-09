import { useSelector } from "react-redux";
import { BsPersonCircle, BsCamera2 } from "react-icons/bs";
import AppRoutes from "../redux/routes/appRoutes";
import Dropdown from "react-bootstrap/Dropdown";
import { LoginUser } from "../redux/components/loginUser/Login";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserProfile } from "./userProfile";

export const Header = () => {
  let navActiveObj = { album: "active" };
  const [show, setShow] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (
    window.location.href.includes("albums") ||
    window.location.href.endsWith(`${window.location.host}/`)
  ) {
    navActiveObj = { album: "active" };
  } else if (window.location.href.includes("posts")) {
    navActiveObj = { posts: "active" };
  } else if (window.location.href.includes("users")) {
    navActiveObj = { user: "active" };
  } else {
    navActiveObj = {};
  }

  // const login = useSelector((state) => state.UserReducer.login);
  let profile = useSelector((state) => state.UserReducer.user);

  if (!profile.id) {
    profile = JSON.parse(sessionStorage.getItem("user"));
  }

  if (profile?.id) {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light ps-4 pe-2"
          style={{ background: "#5F9EA0", color: "white" }}
          id="navbar"
        >
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsColapse"
            aria-controls="navbarsColapse"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarsColapse"
          >
            <a
              className="navbar-brand mb-1"
              href={`${window.location.origin}/albums`}
            >
              <BsCamera2 style={{ color: "white" }} />
            </a>
            <a
              className="nav-link text-light"
              href={`${window.location.origin}/about`}
            >
              About App
            </a>
            <a
              className={`nav-link text-light ${isNavCollapsed ? "ms-2" : ""}`}
              href="#"
            >
              Contact Us
            </a>
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
          <UserProfile profile={profile} />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container-fluid mt-1">
          <div className="row">
            <div
              className="col-2 border border-color"
              style={{ textAlign: "center", backgroundColor: "#e6e6ff" }}
            >
              <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="nav-item">
                  <a
                    href={`${window.location.origin}/albums`}
                    className={`nav-link text-dark ${navActiveObj?.album}`}
                    aria-current="page"
                  >
                    ALBUMS
                  </a>
                </li>
                <li>
                  <a
                    href={`${window.location.origin}/posts`}
                    className={`nav-link text-dark ${navActiveObj?.posts}`}
                  >
                    POSTS
                  </a>
                </li>
                {profile.role === "admin" && (
                  <li>
                    <a
                      href={`${window.location.origin}/users`}
                      className={`nav-link text-dark ${navActiveObj?.user}`}
                    >
                      USERS
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div
              className="col-10"
              style={{ height: "calc(100vh - 60px)", overflowY: "scroll" }}
            >
              <div className="container ">
                <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <LoginUser />
      </>
    );
  }
};
