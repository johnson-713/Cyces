import { Col, Row, Container } from "react-bootstrap";
import "./FAQs.css";

const FAQs = () => {
  const data = [
    {
      id: 1,
      question: "How does the 14 day trial work?",
      answer:
        "After you signup you get access to all the features of formX for 14 days. We want to make sure that you can get formX working to yoursatisfaction before we ask you for your credit card.",
      href: "",
      link: "", 
    },
    {
      id: 2,
      question: "Do we pay extra for more people?",
      answer:
        "No. Unlike most group software, we don't charge you based on how many users you add. 5 users or 50, the price is the same.",
      href: "",
      link: "", 
    },
    {
      id: 3,
      question: "What if we need more than 14 days?",
      answer:
        "We'll give you time. Just let us know at support@formx.stream and we'll happily extend your trial.",
      href: "",
      link: "", 
    },
    {
      id: 4,
      question: "Will we be charged when our trial is up?",
      answer:
        "No. We don't ask for your credit card up front, so you'll only be charged when you decide. If you want to continue after your trial, we'll ask for payment details. If not — cancel with a click, no questions asked.",
      href: "",
      link: "", 
    },
    {
      id: 5,
      question: "Do you have any contracts or cancellation fees?",
      answer:
        "No. formX is a pay-as-you-go service. We do not have contracts or cancellation fees. You can cancel whenever you want. If you cancel, you’ll be billed for the current month, but you won’t be again.",
      href: "#",
      link: "Check our Refund Policy", 
    },
    {
      id: 6,
      question: "Can I upgrade or downgrade anytime?",
      answer:
        "Yes. formX is a pay-as-you-go service and you can upgrade, downgrade or cancel at any time. Click on the My Account link to find options to change your plan.",
      href: "",
      link: "", 
    },
  ];
  return (
    <Container fluid style={{ padding: "32px 0px" }}>
      <Container>
          <h2 className="d-flex text-left faqs__heading">Frequently Asked Questions</h2>
      </Container>
      <Container fluid className="d-flex flex-column align-items-center">
        <Row className="faqs__rows">
          {
            data.map(items => {
              return (
                <Col key={items.id} sm={6} className="faqs__column">
                  <h5>{items.question}</h5>
                  <p>{items.answer}<a href={items.href}>{items.link}</a></p>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Container>
  );
};

export default FAQs;
