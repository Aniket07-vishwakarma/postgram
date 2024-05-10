import { useSelector } from "react-redux";
import { BsPersonCircle, BsCamera2 } from "react-icons/bs";
import AppRoutes from "../redux/routes/appRoutes";
import Dropdown from "react-bootstrap/Dropdown";
import { LoginUser } from "../redux/components/loginUser/Login";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserProfile } from "./userProfile";
import { SideBar } from "./sideBar";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const login = useSelector((state) => state.UserReducer.login);
  let profile = useSelector((state) => state.UserReducer.user);

  if (!profile.id) {
    profile = JSON.parse(sessionStorage.getItem("user"));
  }

  if (profile?.id) {
    return (
      <>
        <nav
          className="navbar navbar-expand-sm navbar-light ps-4 pe-3"
          style={{ background: "#5F9EA0", color: "white" }}
          id="navbar"
        >
          <div className="container-fluid">
            <div
              className="col-11"
              style={{ textAlign: "left", transform: "translateX(-20px)" }}
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
                <span
                  className="navbar-toggler-icon"
                  style={{ height: "1.25rem", width: "1rem" }}
                ></span>
              </button>

              <div
                className={`${
                  isNavCollapsed ? "collapse" : ""
                } navbar-collapse`}
                id="navbarsColapse"
              >
                {isNavCollapsed && (
                  <a
                    className="navbar-brand mb-1"
                    href={`${window.location.origin}/albums`}
                  >
                    <BsCamera2 style={{ color: "white" }} />
                  </a>
                )}
                <a
                  className="nav-link text-light"
                  href={`${window.location.origin}/about`}
                >
                  About App
                </a>
                <a
                  className={`nav-link text-light ${
                    isNavCollapsed ? "ms-2" : ""
                  }`}
                  href="#"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-1" style={{ textAlign: "end" }}>
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
            </div>
          </div>
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
            <SideBar role={profile.role} />
            <div
              className="col-10"
              style={{
                height: `calc(100vh - ${isNavCollapsed ? "64px" : "101px"})`,
                overflowY: "scroll",
              }}
            >
              <AppRoutes />
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
