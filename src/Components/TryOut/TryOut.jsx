import { Button, Col, Row, Container } from "react-bootstrap";
import './TryOut.css'

const TryOut = () => {
    return (
        <Container fluid className="containers">
            <Container>
            <Row>
                <Col className="text-right column-one">
                <h3>Try out formX</h3>
                </Col>
                <Col>
                <Button
                    className="signUpButton"
                >
                    Start Now For Free
                </Button>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default TryOut;