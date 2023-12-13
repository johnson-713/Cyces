import { Button, Form, Row, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './Support.css'


const Support = () => {
  return (
    <div>
        <Header />
        <Container fluid className="text-center">
            <Row className="d-flex justify-content-center row-one">
                <h1>The support team is here to help.</h1>
            </Row>
            <Row className="d-flex flex-column align-items-center row-two">
                <h2>
                    Fill in the support form below we will get back to you.
                </h2>
                <h4>
                    Our current response time is about 30 minutes.
                </h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex text-left">Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your First Name" className="inputsAndSelects"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex text-left">Registered Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Your email address" className="inputsAndSelects"/>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3">
                        <Form.Label className="d-flex text-left">Subject</Form.Label>
                        <Form.Select aria-label="Default select example" className="inputsAndSelects">
                            <option>Choose one:</option>
                            <option value="1">General Customer Service</option>
                            <option value="2">Suggestions</option>
                            <option value="3">Product Support</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3">
                        <Form.Label className="d-flex text-left">Priority</Form.Label>
                        <Form.Select aria-label="Default select example" className="inputsAndSelects">
                            <option>Choose one:</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="d-flex text-left">Mesage</Form.Label>
                        <Form.Control as="textarea" className="inputsAndSelects" style={{height: "220px"}} />
                    </Form.Group>
                    <Button className="formButton">Send</Button>
                </Form>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default Support;
