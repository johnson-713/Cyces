import { Button, Form, Row, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Support = () => {
  return (
    <div>
        <Header />
        <Container fluid className="text-center">
            <Row className="d-flex justify-content-center" style={{backgroundColor: "#042a2b", color: "#ffffff", padding: "64px 32px"}}>
                <h1 style={{fontSize: "48px", marginBottom: "16px"}}>The support team is here to help.</h1>
            </Row>
            <Row className="d-flex flex-column align-items-center" style={{padding: "32px 0px"}}>
                <h2 style={{ marginBottom: "16px"}}>
                    Fill in the support form below we will get back to you.
                </h2>
                <h4 style={{ marginBottom: "16px"}}>
                    Our current response time is about 30 minutes.
                </h4>
                <Form style={{width: "45%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex text-left">Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your First Name" style={{padding: "8px 16px", borderRadius: "3px"}} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex text-left">Registered Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Your email address" style={{padding: "8px 16px", borderRadius: "3px"}} />
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3">
                        <Form.Label className="d-flex text-left">Subject</Form.Label>
                        <Form.Select aria-label="Default select example" style={{padding: "8px 16px", borderRadius: "3px"}}>
                            <option>Choose one:</option>
                            <option value="1">General Customer Service</option>
                            <option value="2">Suggestions</option>
                            <option value="3">Product Support</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="d-flex flex-column mb-3">
                        <Form.Label className="d-flex text-left">Priority</Form.Label>
                        <Form.Select aria-label="Default select example" style={{padding: "8px 16px", borderRadius: "3px"}}>
                            <option>Choose one:</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="d-flex text-left">Mesage</Form.Label>
                        <Form.Control as="textarea" style={{padding: "8px 16px", height: "220px", borderRadius: "3px"}} />
                    </Form.Group>
                    <Button style={{ backgroundColor: "#ef7b45", marginTop: "1rem", border: "none", padding: "10px 24px", fontWeight: "bold"}}>Send</Button>
                </Form>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default Support;
