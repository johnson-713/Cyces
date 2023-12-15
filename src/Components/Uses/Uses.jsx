import { Col, Row, Container } from "react-bootstrap";
import './Uses.css'

const Uses = () => {

  const data = [
    {
      id: 1,
      img: "https://formx.stream/assets/img/workflow.svg",
      name: "workflow",
      bold: "Streamline",
      text: "your data collection forms securely and scalably"
    },
    {
      id: 2,
      img: "https://formx.stream/assets/img/dashboard.svg",
      name: "dashboard",
      bold: "Manage",
      text: "all the reponses you receive with our powerful dashboard"
    },
    {
      id: 3,
      img: "https://formx.stream/assets/img/collaboration.svg",
      name: "collab",
      bold: "Colloborate",
      text: "and amplify your work productivity across all devices from anywhere, any time"
    },
  ]
  return (
    <Container fluid className="outer_container">
      <Container className="d-flex flex-column justify-content-center align-items-center inner_container">
        <Row className="header_row">
          <Col>
            <h2 >What can you do with FormX?</h2>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center cards_row">
        
          {
            data.map(items => {
              return (
                <Col sm key={items.id} className="d-flex flex-column align-items-center">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="cards_row-img"
                    />
                  <p className="text-center">
                    <b>{items.bold}</b>
                    {items.text}
                  </p>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Container>
  );
};

export default Uses;
