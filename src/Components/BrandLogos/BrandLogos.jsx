import { Col, Container, Row } from "react-bootstrap";

const BrandLogos = () => {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2"}}>
        <Container className="d-flex flex-column justify-content-center align-items-center pt-3 pb-3">
      <Row>
        <Col className="mb-3">
          <h3 style={{ color: "#042a2b", fontSize: "28px"}}>Get formX running in minutes</h3>
        </Col>
      </Row>
      <Row  className="mb-3">
        <Col>
          <p style={{ color: "#666666", fontSize: "19.2px"}}>
            Harness the power of analytics, while integrating with the apps you
            love
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around mb-3">
        <Col sm className="ml-auto" style={{ padding: "0px 15px"}}>
          <img
            src="https://formx.stream/assets/img/Slack.svg"
            alt="slack"
            style={{ width: "100%", objectFit: "contain", padding: "10px", margin: "0px 31.5px", height: "65px"}}
          />
        </Col>
        <Col sm className="ml-5" style={{ padding: "0px 15px"}}>
          <img
            src="https://formx.stream/assets/img/trello.png"
            alt="trello"
            style={{ width: "100%", objectFit: "contain", padding: "10px", margin: "0px 31.5px", height: "65px"}}
          />
        </Col>
        <Col sm className="ml-5" style={{ padding: "0px 15px"}}>
          <img
            src="https://formx.stream/assets/img/sheets.png"
            alt="excel"
            style={{ width: "100%", objectFit: "contain", padding: "10px", margin: "0px 31.5px", height: "80px"}}
          />
        </Col>
        <Col sm className="ml-5" style={{ padding: "0px 15px"}}>
          <img
            src="https://formx.stream/assets/img/salesforce.png"
            alt="salesforce"
            style={{ width: "100%", objectFit: "contain", padding: "10px", margin: "0px 31.5px", height: "90px"}}
          />
        </Col>
      </Row>
      <Row  className="mb-3">
        <Col>
          <a
            href="https://www.youtube.com/watch?v=TEhmeJdezbk"
            id="video__link"
          >
            <strong>
              <p style={{ color: "#042a2b", fontSize: "19.2px" }}>
                <img
                  style={{ height: "25px"}}
                  src="https://formx.stream/assets/img/video-play-button.png"
                  alt="playbutton"
                />
                &nbsp;Watch a quick 1 min product tour
              </p>
            </strong>
          </a>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};

export default BrandLogos;
