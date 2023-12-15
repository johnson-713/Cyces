import { Container, Row, Col } from "react-bootstrap";
import './HubCard.css'


const HubCard = () => {
  
  return (
    <Container fluid className="d-flex flex-column align-items-center" style={{padding: "32px 0px"}}>
        <Row style={{marginBottom: "16px"}}>
            <Col>
            <h2 style={{marginBottom: "16px", fontWeight: "bold"}}>Want to know more?</h2>
            </Col>
        </Row>
        <Row style={{gap: "2rem", width: "75%"}}>
            <Col className="hubCard-one hubcard" style={{backgroundColor: "#042a2b"}} md>
            <h3 className="text-right hubLink" style={{color: "#5eb1bf"}}>Pricing</h3>
            </Col>
            <Col className="hubCard-two hubcard" style={{backgroundColor: "#5eb1bf"}} md>
            <h3 className="text-right hubLink" style={{color: "#ffffff"}}>Guides</h3>
            </Col>
            <Col className="hubCard-three hubcard" style={{backgroundColor: "#f2f2f2"}} md>
            <h3 className="text-right hubLink" style={{color: "#5eb1bf"}}>FAQs</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default HubCard;
