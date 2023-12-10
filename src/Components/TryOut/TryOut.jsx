import { Button, Col, Row, Container } from "react-bootstrap";

const TryOut = () => {
    return (
        <Container fluid style={{ backgroundColor: "#cdedf6", padding: "32px 0px"}}>
            <Container>
            <Row>
                <Col>
                <h3>Try out formX</h3>
                </Col>
                <Col>
                <Button style={{backgroundColor: "#ef7b45", border: "none", fontWeight: "bold", padding: "10px 24px"}}>Start Now For Free</Button>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default TryOut;