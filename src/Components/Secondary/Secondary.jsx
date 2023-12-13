import { Col, Row, Container } from "react-bootstrap";
import './Secondary.css'

const Secondary = () => {
  return (
      <Container fluid className="secondary__container">
        <Container>
        <Row>
          <Col sm={7} className="d-flex flex-column justify-content-center secondary__container--column1">
            <h1 className="mb-3">
              Powerful form backend software to handle your submissions.
            </h1>
            <p className="mb-5">You design the forms, we power them!</p>
            <form className="mt-3">
              <input
                className="mb-2 mr-3"
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <button type="submit" className="mb-2">SIGN UP FOR FREE</button>
            </form>
            <p style={{ fontSize: "16px", color: "#5eb1bf"}}>
              No credit card required. No strings attached.
            </p>
          </Col>
          <Col sm={5} className="d-flex align-items-center pl-auto secondary__container--column2">
          <img src='https://formx.stream/assets/img/Hero-illustration-isometric-with-person.png' className='hero__image' alt='hero' />
          </Col>
        </Row>
      </Container>
      </Container>
  );
};

export default Secondary;
