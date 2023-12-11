import { Col, Container, Row } from "react-bootstrap";

const BrandLogos = () => {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2",padding: "32px 0px"}} className="d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col className="mb-3">
          <h3 style={{ color: "#042a2b", fontWeight: "bold",  fontSize: "28px"}}>Get formX running in minutes</h3>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p style={{ color: "#666666", fontSize: "19.2px"}}>
            Harness the power of analytics, while integrating with the apps you
            love
          </p>
        </Col>
      </Row>
      <Row style={{width: "75%", height: "80px"}}>
        <Col sm={3} style={{ padding: "0px !important", height: "70%"}}> 
          <a href="#">
          <img
            src="https://formx.stream/assets/img/Slack.svg"
            alt="slack"
            style={{ width: "70%", objectFit: "contain", padding: "10px !important", margin: "0 auto !important"}}
          />
          </a>
        </Col>
        <Col sm={3} style={{ padding: "0px !important"}}>
          <a href="#">
          <img
            src="https://formx.stream/assets/img/trello.png"
            alt="trello"
            style={{ width: "70%", objectFit: "contain", padding: "10px",  margin: "0 auto !important"}}
          />
          </a>
        </Col>
        <Col sm={3} style={{ padding: "0px !important"}}>
          <a href="#">
          <img
            src="https://formx.stream/assets/img/sheets.png"
            alt="excel"
            style={{ width: "70%", height: "60%", objectFit: "contain", padding: "10px",  margin: "0 auto !important"}}
          />
          </a>
        </Col>
        <Col sm={3} style={{ padding: "0px !important"}}>
          <a href="#">
          <img
            src="https://formx.stream/assets/img/salesforce.png"
            alt="salesforce"
            style={{ width: "70%", height: "70%", objectFit: "contain", padding: "10px",  margin: "0 auto !important"}}
          />
          </a>
        </Col>
      </Row>
      <Row>
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
  );
};

export default BrandLogos;
