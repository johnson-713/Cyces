import { Col, Row, Container } from "react-bootstrap";
import './Secondary.css'

const Secondary = () => {
  return (
      <Container fluid style={{ backgroundColor: "#042a2b", color: "#ffffff", minHeight: "630px", padding: "64px 32px"}}>
        <Container>
        <Row>
          <Col sm={7} className="d-flex flex-column justify-content-center">
            <h1 style={{ fontSize: "48px"}} className="mb-3">
              Powerful form backend software to handle your submissions.
            </h1>
            <p style={{ fontSize: "24px", color: "#cdedf6"}} className="mb-5">You design the forms, we power them!</p>
            <form className="mt-3">
              <input
                className="mb-2"
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                style={{ fontSize: "18px", border: "none", borderRadius: "3px", padding: "8px 16px"}}
              />
              <button type="submit" className="mb-2 ml-3" style={{ backgroundColor: "#ef7b45", color: "#ffffff", border: "none", padding: "10px 24px", fontWeight: "bold", borderRadius: "3px"}}>SIGN UP FOR FREE</button>
            </form>
            <p style={{ fontSize: "16px", color: "#5eb1bf"}}>
              No credit card required. No strings attached.
            </p>
          </Col>
          <Col sm={5} className="d-flex align-items-center pl-auto">
          <img src='https://formx.stream/assets/img/Hero-illustration-isometric-with-person.png' className='hero__image' alt='hero' />
          </Col>
        </Row>
      </Container>
      </Container>
  );
};

export default Secondary;
