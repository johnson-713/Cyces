import { Button, Container, Form, Row, Col } from "react-bootstrap";
import './PricingFA.css'

const PricingFA = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center pricingFA__container">
      <Row className="pricingFA__row1">
        <h3>Try formX free for 14 days! No credit card required.</h3>
      </Row>
      <Row className="pricingFA__row2">
      <input className="mr-3" type="email" placeholder="Your Email Address" required />
        <button>Get started</button>
      </Row>
    </Container>
  )
}

export default PricingFA;
