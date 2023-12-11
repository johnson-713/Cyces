import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const UseProperties = () => {
    const data = [
        {
            id: 1,
            img: "https://formx.stream/assets/img/promotion.svg",
            title: "Marketers",
            details: "Enable data collection with the freedom of design. No need to call in the IT team."
        },
        {
            id: 2,
            img: "https://formx.stream/assets/img/support.svg",
            title: "Support specialists",
            details: "All your support data in one place, organized and automated. Reports just the way you want."
        },
        {
            id: 3,
            img: "https://formx.stream/assets/img/design.svg",
            title: "Designers and developers",
            details: "Have more productive time to concentrate on what's needed. We will take care of your backend."
        },
    ]
  return (
    <Container fluid className='d-flex flex-column align-items-center' style={{backgroundColor: "#cdedf6", padding: "32px 0px"}}>
      <Row className="text-center">
        <h2 style={{marginBottom: "16px", fontWeight: "bold", }}>Where can you use formX?</h2>
      </Row>
      <Row>
        <Col lg={12}>
        <p className="text-center">
          Best suited for static sites, lead generation forms, surveys, contact
          forms, newsletters, marketing signups and sharing lead-gen materials.
        </p>
        </Col>
      </Row>
      <Row style={{width: "75%"}}>
        {data.map(item => {
            return (
                <Col key={item.id} md className='d-flex flex-column text-center align-items-center' style={{padding: "20px 15px"}}>
                    <img src={item.img} alt={item.title} style={{width: "100px", height: "100px", margin: "16px"}}/>
                    <h5 style={{ fontSize: "16px", marginBottom: "16px", color: "#042a2b"}}>{item.title}</h5>
                    <p style={{color: "#666666"}}>{item.details}</p>
                </Col>
            )
        })}
      </Row>
    </Container>
  );
};

export default UseProperties;
