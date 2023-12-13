import { Container, Form } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container fluid className="d-flex align-items-center signUp-outerContainer">
        <Container className="d-flex flex-column justify-content-center align-items-center signUp-innerContainer" style={{height: ""}}>
            <img src="https://app.formx.stream/assets/formx.792086d9.png" alt="logo" />
            <p style={{color: "#1a202c", marginBottom: "20px", fontSize: "19.2px", opacity: "0.6"}}>Login to FormX Console</p>
            <br />
            <Form>
            <Form.Group className="mb-2">
                        <Form.Label className="d-flex text-left">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" required className="inputsAndSelects"/>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label className="d-flex text-left">Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password" required className="inputsAndSelects"/>
                        <Form.Label className="d-flex text-left" style={{fontSize: "10.88px"}}>Must be 8 characters long</Form.Label>
                    </Form.Group>
            </Form>
            <button className="registerButton">Login&rarr;</button>
            <br />
            <br />
            <span><p>New to FormX? <a href="signUp" style={{color: "#3182CE"}}>Register now {" "}</a> | Forgot password? <a href="/forgotpassword" style={{color: "#3182CE"}}>Click here</a></p></span>
        </Container>
    </Container>
  )
}

export default LoginPage
