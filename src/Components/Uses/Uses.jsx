import { Col, Row, Container } from "react-bootstrap";

const Uses = () => {
  return (
    <Container fluid style={{ backgroundColor: "#ffffff", padding: "32px 0px"}}>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row>
          <Col>
            <h2 style={{ color: "#042a2b", margin: "0px 0px 16px"}}>What can you do with FormX?</h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center" style={{ padding: "30px 0px"}}>
          <Col sm className="d-flex flex-column align-items-center">
            <img
              src="https://formx.stream/assets/img/workflow.svg"
              alt="workflow"
              style={{ objectFit: "contain", maxHeight: "60px", margin: "15px 0px", maxWidth: "60px"}}
            />
            <p className="text-center">
              <b>Streamline </b>
              your data collection forms securely and scalably
            </p>
          </Col>
          <Col sm className="d-flex flex-column align-items-center">
            <img
              src="https://formx.stream/assets/img/dashboard.svg"
              alt="dashboard"
              style={{objectFit: "contain", maxHeight: "60px", margin: "15px 0px", maxWidth: "60px"}}
            />
            <p className="text-center">
              <b>Manage </b>
              all the reponses you receive with our powerful dashboard
            </p>
          </Col>
          <Col sm className="d-flex flex-column align-items-center">
            <img
              src="https://formx.stream/assets/img/collaboration.svg"
              alt="collab"
              style={{objectFit: "contain", maxHeight: "60px", margin: "15px 0px", maxWidth: "60px"}}
            />
            <p className="text-center">
              <b>Collaborate </b>
              and amplify your work productivity across all devices from
              anywhere, any time
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Uses;
