import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center" style={{backgroundColor: "#042a2b", padding: "48px 0px 32px"}}>
        <Row>
            <img src="https://formx.stream/assets/img/formx-white.png" alt="logo" style={{margin: "10px", width: "120px"}}/>
        </Row>
        <Row className="d-flex justify-content-center" style={{color: "#ffffff", width: "80%"}}>
            <p style={{padding: "15px"}}>Badge Program</p>
            <p style={{padding: "15px"}}>About Our Team</p>
            <p style={{padding: "15px"}}>Contact Us</p>
            <p style={{padding: "15px"}}>Support</p>
            <p style={{padding: "15px"}}>GDPR</p>
            <p style={{padding: "15px"}}>Terms of Service</p>
            <p style={{padding: "15px"}}>Privacy Policy</p>
            <p style={{padding: "15px"}}>Refund Policy</p>
        </Row>
        <Row className="d-flex mt-5">
        <span style={{fontSize: "12.8px"}}>
                          <span style={{color: "#5eb1bf"}}>© </span>
                          <a href="http://cyces.co" style={{color: "#ffffff"}} target="_blank">Cyces Innovation Labs LLP. </a>
                            <span style={{color: "#5eb1bf"}}>All Rights Reserved.Icons from </span>
                            <a href="https://flaticons.com" style={{color: "#ffffff"}} target="_blank">Flaticon. </a>
                            <span style={{color: "#5eb1bf"}}>Illustrations from </span>
                            <a href="https://undraw.co" style={{color: "#ffffff"}} target="_blank">Undraw</a>
                    </span>
        </Row>
    </Container>
  )
}

export default Footer;
