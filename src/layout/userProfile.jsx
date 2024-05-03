import { Col, Container, Modal, Row } from "react-bootstrap";
import { SiMinutemailer } from "react-icons/si";
import { RiAdminLine } from "react-icons/ri";

export const UserProfile = (profileData) => {
  const profile = profileData?.profile;
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{profile.name ?? "Leanne Graham"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <img
                className="img-responsive"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="User Avtar"
                width="100%"
                height="100%"
                style={{ borderRadius: "50%" }}
              />
            </Col>
            <Col xs={12} md={8}>
              <Modal.Body>
                <SiMinutemailer /> &nbsp;
                {profile.email ?? "Sincere@april.biz"}
              </Modal.Body>
              <Modal.Body>
                <RiAdminLine />
                &nbsp;
                {profile.role.toUpperCase() ?? "Admin".toUpperCase()}
              </Modal.Body>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </>
  );
};
