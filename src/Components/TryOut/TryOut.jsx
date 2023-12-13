import { Button, Col, Form, Row, Container } from "react-bootstrap";
import "./TryOut.css";

const TryOut = () => {
  return (
    <Container fluid className="containers">
      <Container>
      <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} lg={6} className="mt-3 text-center containers__column1">
            <h3 className="containers__header" style={{width: "185px"}}>Try out formX</h3>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-3 containers__column2">
            <Form>
              <Button className="signUpButton">SIGN UP FOR FREE</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TryOut;
