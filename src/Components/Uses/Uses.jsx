import { Col, Row, Container } from "react-bootstrap";
import './Uses.css'

const Uses = () => {
  return (
    <Container fluid className="outer_container">
      <Container className="d-flex flex-column justify-content-center align-items-center inner_container">
        <Row className="header_row">
          <Col>
            <h2>What can you do with FormX?</h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center cards_row">
          <Col sm className="d-flex flex-column align-items-center">
            <img
              className="cards_row-img"
              src="https://formx.stream/assets/img/workflow.svg"
              alt="workflow"
            />
            <p className="text-center">
              <b>Streamline </b>
              your data collection forms securely and scalably
            </p>
          </Col>
          <Col sm className="d-flex flex-column align-items-center">
            <img
              className="cards_row-img"
              src="https://formx.stream/assets/img/dashboard.svg"
              alt="dashboard"
            />
            <p className="text-center">
              <b>Manage </b>
              all the reponses you receive with our powerful dashboard
            </p>
          </Col>
          <Col sm className="d-flex flex-column align-items-center">
            <img
              className="cards_row-img"
              src="https://formx.stream/assets/img/collaboration.svg"
              alt="collab"
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
