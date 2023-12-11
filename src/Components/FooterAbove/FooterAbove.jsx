import { Col, Container, Row } from "react-bootstrap";

const FooterAbove = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center" style={{backgroundColor: "#042a2b", padding: "32px 0px"}}>
      <Row>
        <h3 style={{color: "#ffffff", fontWeight: "bold", marginBottom: "16px"}}>Sound good?</h3>
      </Row>
      <Row style={{marginTop: "16px"}}>
        <Col>
          <form className="mt-3">
            <input
              className="mb-2"
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              style={{
                fontSize: "18px",
                border: "none",
                borderRadius: "3px",
                padding: "8px 16px",
              }}
            />
            <button
              type="submit"
              className="mb-2 ml-3"
              style={{
                backgroundColor: "#ef7b45",
                color: "#ffffff",
                border: "none",
                padding: "10px 24px",
                fontWeight: "bold",
                borderRadius: "3px",
              }}
            >
              SIGN UP FOR FREE
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterAbove;
