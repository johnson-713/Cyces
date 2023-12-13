import { Col, Container, Row } from "react-bootstrap";
import './BrandLogos.css'

const BrandLogos = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center brandLogo__container">
      <Row className="text-center brandLogo__row1">
        <Col className="mb-3 brandLogo__row1--column">
          <h3>Get formX running in minutes</h3>
        </Col>
      </Row>
      <Row className="text-center brandLogo__row2">
        <Col className="brandLogo__row2--column">
          <p>
            Harness the power of analytics, while integrating with the apps you
            love
          </p>
        </Col>
      </Row>
      <Row className="brandLogo__row3">
        <Col className="d-flex justify-content-center brandLogo__row3--column" sm={3}> 
          <a href="#">
          <img
            className="brandLogo__slack"
            src="https://formx.stream/assets/img/Slack.svg"
            alt="slack"
          />
          </a>
        </Col>
        <Col className="brandLogo__row3--column" sm={3}>
          <a href="#">
          <img
            className="brandLogo__trello"
            src="https://formx.stream/assets/img/trello.png"
            alt="trello"
          />
          </a>
        </Col>
        <Col className="brandLogo__row3--column" sm={3}>
          <a href="#">
          <img
            className="brandLogo__sheets"
            src="https://formx.stream/assets/img/sheets.png"
            alt="excel"
            height={80}
          />
          </a>
        </Col>
        <Col className="brandLogo__row3--column" sm={3}>
          <a href="#">
          <img
            className="brandLogo__salesforce"
            src="https://formx.stream/assets/img/salesforce.png"
            alt="salesforce"
            height={90}
          />
          </a>
        </Col>
      </Row>
      <Row className="brandLogo__row4">
        <Col className="brandLogo__row4--column">
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
