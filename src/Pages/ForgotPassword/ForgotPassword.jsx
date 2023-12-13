import { Container, Form } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <Container fluid className="d-flex align-items-center signUp-outerContainer">
        <Container className="d-flex flex-column justify-content-center align-items-center signUp-innerContainer" style={{height: ""}}>
            <img src="https://app.formx.stream/assets/formx.792086d9.png" alt="logo" />
            <p style={{color: "#1a202c", marginBottom: "20px", fontSize: "19.2px", opacity: "0.6"}}>Forgot password</p>
            <br />
            <Form>
            <Form.Group className="mb-2">
                        <Form.Control type="email" placeholder="Enter your email" required className="inputsAndSelects"/>
                    </Form.Group>
            </Form>
            <button className="registerButton">Submit&rarr;</button>
            <br />
            <br />
            <span><p>New to FormX? <a href="signUp" style={{color: "#3182CE"}}>Register now {" "}</a> | Need Help? <a href="/support" style={{color: "#3182CE"}}>Contact Support</a></p></span>
        </Container>
    </Container>
  )
}

export default ForgotPassword;
