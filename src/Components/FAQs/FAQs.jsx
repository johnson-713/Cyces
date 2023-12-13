import { Col, Row, Container } from "react-bootstrap";
import './FAQs.css'

const FAQs = () => {
  return (
    <Container fluid style={{padding: "32px 0px"}}>
        <Container>
        <Row className="faqs__header">
        <h2 style={{paddingLeft: "0px"}}>Frequently Asked Questions</h2>
      </Row>
        </Container>
      <Container fluid className="d-flex flex-column align-items-center">
      <Row className="faqs__rows">
        <Col sm={6} className="faqs__column">
          <h5>How does the 14 day trial work?</h5>
          <p>
            After you signup you get access to all the features of formX for 14
            days. We want to make sure that you can get formX working to your
            satisfaction before we ask you for your credit card.
          </p>
        </Col>
        <Col sm={6} className="faqs__column">
          <h5>Do we pay extra fr more people?</h5>
          <p>
            No. Unlike most group software, we don't charge you based on how
            many users you add. 5 users or 50, the price is the same.
          </p>
        </Col>
      </Row>
      <Row className="faqs__rows">
        <Col sm={6} className="faqs__column">
          <h5>What if we need more than 14 days?</h5>
          <p>
            We'll give you time. Just let us know at support@formx.stream and
            we'll happily extend your trial.
          </p>
        </Col>
        <Col sm={6} className="faqs__column">
          <h5>Will we be charged when our trial is up?</h5>
          <p>
            No. We don't ask for your credit card up front, so you'll only be
            charged when you decide. If you want to continue after your trial,
            we'll ask for payment details. If not — cancel with a click, no
            questions asked.
          </p>
        </Col>
      </Row>
      <Row className="faqs__rows">
        <Col sm={6} className="faqs__column">
          <h5>Do you have any contracts or cancellation fees?</h5>
          <p>
            No. formX is a pay-as-you-go service. We do not have contracts or
            cancellation fees. You can cancel whenever you want. If you cancel,
            you’ll be billed for the current month, but you won’t be billed
            again. <a href="#">Check our refund policy</a>
          </p>
        </Col>
        <Col sm={6} className="faqs__column">
          <h5>Can I upgrade or downgrade anytime?</h5>
          <p>
            Yes. formX is a pay-as-you-go service and you can upgrade, downgrade
            or cancel at any time. Click on the My Account link to find options
            to change your plan.
          </p>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default FAQs;
