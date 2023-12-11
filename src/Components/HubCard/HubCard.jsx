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
            <Col className="hubCard-one" style={{backgroundColor: "#042a2b", margin: "9.6px"}} md>
            <h3 className="text-right" style={{color: "#5eb1bf", fontWeight: "bold", padding: "48px 32px", marginBottom: "16px", textDecoration: "underline"}}>Pricing</h3>
            </Col>
            <Col className="hubCard-two" style={{backgroundColor: "#5eb1bf", margin: "9.6px"}} md>
            <h3 className="text-right" style={{color: "#ffffff", fontWeight: "bold", padding: "48px 32px", marginBottom: "16px", textDecoration: "underline"}}>Guides</h3>
            </Col>
            <Col className="hubCard-three" style={{backgroundColor: "#f2f2f2", margin: "9.6px"}} md>
            <h3 className="text-right" style={{color: "#5eb1bf", fontWeight: "bold", padding: "48px 32px",marginBottom: "16px", textDecoration: "underline"}}>FAQs</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default HubCard;
