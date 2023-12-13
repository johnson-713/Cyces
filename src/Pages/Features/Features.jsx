import { Container, Row, Col, Button, NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "../../Components/Footer/Footer";
import FooterAbove from "../../Components/FooterAbove/FooterAbove";
import Header from "../../Components/Header/Header";
import HubCard from "../../Components/HubCard/HubCard";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <Header />
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary features">
      <Container>
          <Nav className="d-flex justify-content-between w-100" style={{padding: "0px 15px", margin: "0px 31.2px"}}>
            <Nav.Link href="#collect" style={{padding: "12px 6px", color: "#ffffff"}}>Collect</Nav.Link>
            <Nav.Link href="#monitor" style={{padding: "12px 6px", color: "#ffffff"}}>Monitor</Nav.Link>
            <Nav.Link href='#actions' style={{padding: "12px 6px", color: "#ffffff"}}>Actions</Nav.Link>
            <Nav.Link href='#colloborate' style={{padding: "12px 6px", color: "#ffffff"}}>Collobrate</Nav.Link>
            <Nav.Link href="#notifications" style={{padding: "12px 6px", color: "#ffffff"}}>Notifications</Nav.Link>
            <Nav.Link href="#analytics" style={{padding: "12px 6px", color: "#ffffff"}}>Analytics</Nav.Link>
            <Nav.Link href='#agency' style={{padding: "12px 6px", color: "#ffffff"}}>Agency</Nav.Link>
            <Nav.Link href='#' style={{padding: "12px 6px", color: "#ffffff"}}>Beyond</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      <div className="d-flex flex-column text-center features-heading">
        <h1>Get boring form backends out of your to-do-list!</h1>
        <p>Get data submissions, organize and automate them.</p>
      </div>
      <Container fluid className="features-container">
        <Container className="d-flex flex-column align-items-center">
          <Row className="text-center">
            <Col>
              <a
                href="https://www.youtube.com/watch?v=TEhmeJdezbk"
                id="video__link"
              >
                <strong>
                  <p style={{ color: "#042a2b", fontSize: "28px" }}>
                    <img
                      style={{ height: "32px" }}
                      src="https://formx.stream/assets/img/video-play-button.png"
                      alt="playbutton"
                    />
                    &nbsp;Watch a quick 1 min product tour
                  </p>
                </strong>
              </a>
            </Col>
          </Row>
          <Row className="features-row" id="collect">
          <Col sm={4} lg={{ order: 'last' }} md={{ order: 'first' }}>
              <img
                src="https://formx.stream/assets/img/collect.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'first' }} md={{ order: 'last' }} className="features-column">
              <h4>Collect (Data Collection and Manipulation)</h4>
              <p>
                Understand your visitors using a contact form and collect their
                information effortlessly to determine your target audiences.
              </p>
              <ul>
                <li>
                  Take full control of how you collect data: formX support both{" "}
                  <strong>POST and JS based setup</strong>, be always AJAX
                  ready!
                </li>
                <li>
                  <strong>
                    Avoid spam using pattern identifaction intelligence.{" "}
                  </strong>
                  don't waste valuable time sorting through spam. Enable google
                  re-captcha and honeypots to weed them out.
                </li>
                <li>
                  Let your submitters know you're listening: send{" "}
                  <strong>customised auto-responders</strong>, automate
                  confirmation emails with a single click, interact passively
                  with your submitters!
                </li>
                <li>
                  <strong>Simplified file upload</strong> with the latest beta
                  feature: Your visitors will be able to upload files and images
                  to your forms (beta).
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="features-row">
          <Col className="d-flex flex-row"  id="monitor">
          <Col sm={4} lg={{ order: 'first' }} md={{ order: 'last' }}>
              <img
                src="https://formx.stream/assets/img/monitor.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'last' }} md={{ order: 'first' }} className="features-column">
              <h4>Monitor (Intuitive Dashboard)</h4>
              <p>
                Our powerful CRM-friendly dashboard does more than just help
                manage metrics and insights. Use our intelligent workflows and
                increase productivity! It is completely customizable to all your
                requirements.
              </p>
              <ul>
                <li>
                  Access your dashboard anytime, anywhere: use powerful readable
                  view to access your dashboard across all platforms without any
                  interruptions.
                </li>
                <li>
                  Effective state Management:
                  <strong>
                    {" "}
                    tag or label submissions based on their state{" "}
                  </strong>
                  (received, completed, in-progress, mark as read, spam etc.)
                </li>
                <li>
                  Filter, search and sort your submissions at one place: use
                  filters such as <strong>activity score</strong>, state and
                  other basic criteria such as date, name, email, status etc.
                </li>
                <li>
                  Manage submissions with just a single click: make use of our
                  one-click reply function to save time and double your
                  productivity rates.
                </li>
              </ul>
            </Col>
          </Col>
          </Row>
          <Row className="features-row" id="actions">
          <Col sm={4} lg={{ order: 'last' }} md={{ order: 'first' }}>
              <img
                src="https://formx.stream/assets/img/actions.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'first' }} md={{ order: 'last' }} className="features-column">
              <h4>Actions (Controllable Platform)</h4>
              <p>
                Keep track of your actions with a completely controllable
                platform.
              </p>
              <ul>
                <li>
                  Ensure better customer enagagement:{" "}
                  <strong>schedule remainders and make notes </strong>about a
                  submission while taking action.
                </li>
                <li>
                  Maintain an activity score for all your users: Score each user
                  depending on their timeline and activity log.
                </li>
                <li>
                  Build workspaces and create forms on multiple domains: formX
                  offers <strong>multiple-domain management </strong>where you
                  can add several workspaces to your account.
                </li>
                <li>
                  <strong>Redirect your submitters </strong> to another page: If
                  you have a specific page you want your submitters to see, you
                  can redirect them there using our auto-direct feature.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="features-row" id="colloborate">
          <Col sm={4} lg={{ order: 'first' }} md={{ order: 'last' }}>
              <img
                src="https://formx.stream/assets/img/collaborate.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'last' }} md={{ order: 'first' }} className="features-column">
              <h4>Collaborate (Integrations)</h4>
              <p>
                Connect with other third-party apps to amplify your performance
                with formX. Use your preferred apps and get instant
                notifications and alerts.
              </p>
              <ul>
                <li>
                  Connect with all your favorite apps using Zapier: being
                  Zapier-enabled, formX allows you to automate actions in
                  several versatile apps.
                </li>
                <li>
                  Receive notifications directly on your Slack account: enable
                  incoming webhooks and get notified whenever you receive a
                  submission.
                </li>
                <li>API</li>
                <li>
                  Export your data in CSV format: view and analyze your form
                  data in a CSV file.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="features-row" id="notifications">
          <Col sm={4} lg={{ order: 'last' }} md={{ order: 'first' }}>
              <img
                src="https://formx.stream/assets/img/notifications.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'first' }} md={{ order: 'last' }} className="features-column">
              <h4>Notifications</h4>
              <p>
                Stay ahead of the game with instant notifications and alerts.
              </p>
              <ul>
                <li>
                  Use push notifications: enable your notes and scheduled
                  reminders as popups in applications.
                </li>
                <li>
                  Keep the entire team in the loop: send CCs of reminder emails
                  and push notifications.
                </li>
                <li>
                  Get notified about new submissions: monitor the frequency of
                  submissions with e-mail updates on every submission.
                </li>
                <li>
                  Get custom reports to gauge performance: have insights emailed
                  to you instantly at any time!
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="features-row" id="analytics">
          <Col sm={4} lg={{ order: 'first' }} md={{ order: 'last' }}>
              <img
                src="https://formx.stream/assets/img/analytics.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'last' }} md={{ order: 'first' }} className="features-column">
              <h4>Analytics</h4>
              <p>
                Know your visitors in real-time with comprehensive analytics and
                make informed decisions based on their behavior.
              </p>
              <ul>
                <li>
                  <strong>Track your visitors : </strong> Get a chronological
                  timeline of submitters’ visits, track and facilitate visitor
                  conversions.
                </li>
                <li>
                  <strong>UTM Parameters Capture : </strong> Track where your
                  users come from and other metrics with our UTM support.
                </li>
                <li>
                  Use geo-intelligence to know where your submitters are from:
                  with formX, build business zones for improved operations.
                </li>
                <li>
                  Get more customers by tracking form conversions: increase the
                  number of leads and measure conversion rates.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="features-row" id="agency">
          <Col sm={4} lg={{ order: 'last' }} md={{ order: 'first' }}>
              <img
                src="https://formx.stream/assets/img/agency.svg"
                style={{ width: "100%", margin: "18.9px 0px" }}
                alt=""
              />
            </Col>
            <Col sm={8} lg={{ order: 'first' }} md={{ order: 'last' }} className="features-column">
              <h4>Agency</h4>
              <p>
                <a href="/features" style={{color: "#5EB1BF"}}>Are you an agency? </a> Get add-ons to improve your
                functionality and boost performance.
              </p>
              <ul>
                <li>
                  Assign roles and access privileges to team members and admins:
                  give your team access to your dashboard via multiple account
                  management, for improved productivity and progress.
                </li>
                <li>
                  Use formX for your clients with our multi-client access
                  feature: help your clients reach their business goals through
                  effective collaboration and improved communication.
                </li>
                <li>
                  UTM Parameters Capture: Track where your users come from. Get
                  to know their location amongst other metrics.
                </li>
                <li>
                  Strict data privacy code: your information will never be
                  disclosed to anyone, as per the GDPR.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="blue__container">
        <Container className="d-flex align-items-center justify-content-center">
          <Row>
            <h3 className="containers__header text-center">
              Are you an agency? We have something for you.
            </h3>
            <Button className="signUpButton">Become a partner</Button>
          </Row>
        </Container>
      </Container>
      <HubCard />
      <Container fluid className="d-flex flex-column align-items-center app-links">
        <Row className="app-links-text">
        <p>Find our apps on</p>
        </Row>
        <Row>
        <a href="#">
            <img className="app-links-image" src="https://formx.stream/assets/img/App_Store_Badge_Eng.svg" height={50} alt="" />
        </a>
        <a href="#">
            <img className="app-links-image" src="https://formx.stream/assets/img/google-play-badge.png" height={50} alt="" />
        </a>
        </Row>
        
      </Container>
      <FooterAbove />
      <Footer />
    </div>
  );
};

export default Features;
