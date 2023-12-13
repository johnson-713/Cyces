import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'


const Footer = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center footer__container">
        <Row>
            <img src="https://formx.stream/assets/img/formx-white.png" className="footer__logo" alt="logo"/>
        </Row>
        <Row className="d-flex justify-content-between mt-3" style={{color: "#ffffff", width: "80%"}}>
        <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">Badge Program</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">About Our Team</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">Contact Us</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="/support" className="footer__links">Support</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">GDPR</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">Terms of Service</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">Privacy Policy</a>
          </Col>
          <Col xs={12} md className="text-center mb-3">
            <a href="#" className="footer__links">Refund Policy</a>
          </Col>
        </Row>
        <Row className="d-flex text-left mt-5">
        <span style={{fontSize: "12.8px", padding: "0px 20px"}}>
                          <span style={{color: "#5eb1bf"}}>© </span>
                          <a href="http://cyces.co" className=" footer__links" target="_blank">Cyces Innovation Labs LLP. </a>
                            <span style={{color: "#5eb1bf"}}>All Rights Reserved.Icons from </span>
                            <a href="https://flaticons.com" className=" footer__links" target="_blank">Flaticon. </a>
                            <span style={{color: "#5eb1bf"}}>Illustrations from </span>
                            <a href="https://undraw.co" className=" footer__links" target="_blank">Undraw</a>
                    </span>
        </Row>
    </Container>
  )
}

export default Footer;
