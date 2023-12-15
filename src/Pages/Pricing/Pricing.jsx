import { Container, Row, Button, Card } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./Pricing.css";
import Footer from "../../Components/Footer/Footer";
import PricingFA from "../../Components/PricingFA/PricingFA";
import FAQs from "../../Components/FAQs/FAQs";

const Pricing = () => {
  return (
    <div>
      <Header />
      <Container
        fluid
        className="d-flex flex-column align-items-center pricing__container"
      >
        <h1 className="heading__one">Pricing</h1>
        <h5 className="heading__five">
          <a href="#">Start a free trial today,</a> pick a plan after getting
          100 form submissions (Free Forever).
        </h5>
      </Container>
      <Container fluid className="card-container">
        <div className="mb-3 mt-3">
        <Card className="text-center card">
          <Card.Header className="card-header">
          <h3>Starter</h3>
          </Card.Header>
          <Card.Title className="card-title mb-0">
          <h2 className="mb-0">
          <span style={{fontSize: "24px", color: "#666666"}}>$</span>4.99
          </h2>
          <span>per month</span>
          </Card.Title>
          <div className="button-div">
          <Button className="card-button">SIGN UP FOR FREE</Button>
          </div>
          <Card.Text className="card-text">
          <p className="mb-0 text-left">
          <strong>Unlimited Forms</strong>
          </p>
          <p className="mb-0 text-left">1 Domain Allowed</p>
          <p className="mb-0 text-left">Email Notifications</p>
          <p className="mb-0 text-left">Auto Responders</p>
          <p className="mb-0 text-left">Auto Redirects</p>
          </Card.Text>
        </Card>
        <Card className="text-center card">
          <Card.Header className="card-header2">
          <h3>SMBs & Freelancers</h3>
          </Card.Header>
          <Card.Title className="card-title mb-0" style={{backgroundColor: "#cdedf6"}}>
          <h2 className="mb-0">
          <span style={{fontSize: "24px", color: "#666666"}}>$</span>49.99
          </h2>
          <span>per month</span>
          </Card.Title>
          <div className="button-div" style={{backgroundColor: "#cdedf6"}}>
          <Button className="card-button">SIGN UP FOR FREE</Button>
          </div>
          <Card.Text className="card-text" style={{backgroundColor: "#cdedf6"}}>
          <p className="mb-0 text-left">
          <strong>Everyting in Starter Plan Plus,</strong>
          </p>
          <p className="mb-0 text-left">10 Domain Allowed</p>
          <p className="mb-0 text-left">Spam Protection</p>
          <p className="mb-0 text-left">Custom Reports</p>
          <p className="mb-0 text-left">Slack & Zapier Integration</p>
          <p className="mb-0 text-left">Workflow & State Management</p>
          </Card.Text>
        </Card>
        <Card className="text-center card">
          <Card.Header className="card-header">
          <h3>Business & Agency</h3>
          </Card.Header>
          <Card.Title className="card-title mb-0">
          <h2 className="mb-0">
          <span style={{fontSize: "24px", color: "#666666"}}>$</span>99.99
          </h2>
          <span>per month</span>
          </Card.Title>
          <div className="button-div">
          <Button className="card-button">SIGN UP FOR FREE</Button>
          </div>
          <Card.Text className="card-text">
          <p className="mb-0 text-left">
          <strong>Everything in Freelancer plan plus,</strong>
          </p>
          <p className="mb-0 text-left"><strong>UNLIMITED</strong> Domain Allowed</p>
          <p className="mb-0 text-left">Multi User Access Management</p>
          <p className="mb-0 text-left">Client Management</p>
          <p className="mb-0 text-left">White Labelled Client Dashboards</p>
          </Card.Text>
        </Card>
        </div>
        <Container className="pricing-details">
          <p>
            Voila! That means, we never restrict you on the number of submissions you recieve, or on the number of forms.
            <br />
            <br />
            Avail all the above plans on 
            <strong>Yearly Pre-Paid plan</strong> to get <strong>2 Months FREE</strong> upfront. Save nearly 17% on your yearly bill.          
          </p>
        </Container>
      </Container>
      <Container fluid className="blue__container">
        <Container>
          <Row className="d-flex flex-row justify-content-center align-items-center">
              <h3 className="containers__header text-center">
                Are you an agency? We have something for you.
              </h3>
                <Button className="signUpButton">Become a partner</Button>
          </Row>
        </Container>
      </Container>
      <FAQs />
      <PricingFA />
      <Footer />
    </div>
  );
};

export default Pricing;
