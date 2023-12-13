import { Container, Form } from "react-bootstrap";
import './SignUpPage.css'


const SignUpPage = () => {
  return (
    <Container fluid className="d-flex align-items-center signUp-outerContainer">
        <Container className="d-flex flex-column justify-content-center align-items-center signUp-innerContainer" style={{height: ""}}>
            <img src="https://app.formx.stream/assets/formx.792086d9.png" alt="logo" />
            <Form>
            <Form.Group className="mb-2">
                        <Form.Label className="d-flex text-left">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required className="inputsAndSelects"/>
                    </Form.Group>
            <Form.Group className="mb-2">
                        <Form.Label className="d-flex text-left">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required className="inputsAndSelects"/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label className="d-flex text-left">Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password" required className="inputsAndSelects"/>
                        <Form.Label className="d-flex text-left" style={{fontSize: "10.88px"}}>Must be 8 characters long</Form.Label>
                    </Form.Group>
            </Form>
            <button className="registerButton">Register&rarr;</button>
            <br />
            <br />
            <span><p>Already registered? <a href="/login" style={{color: "#3182CE"}}>Login {"  "}</a> | Need Help? <a href="/support" style={{color: "#3182CE"}}>Contact Support</a></p></span>
        </Container>
    </Container>
  )
}

export default SignUpPage;
