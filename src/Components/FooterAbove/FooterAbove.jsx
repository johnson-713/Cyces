import { Container, Row } from "react-bootstrap";
import './FooterAbove.css'

const FooterAbove = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center footerAbove__container">
      <Row className="footerAbove__row1">
        <h3>Sound good?</h3>
      </Row>
      <Row className="footerAbove__row2">
        <input className="mr-3 mb-3" type="email" placeholder="Your Email Address" required />
        <button className="mb-3">SIGN UP FOR FREE</button>
      </Row>
    </Container>
  );
};


export default FooterAbove;


