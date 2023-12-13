import { Col, Container, Row } from 'react-bootstrap';
import './AdditionalFeatures.css'

const AdditionalFeatures = () => {
    const data = [
        {
            id: 1,
            img: "https://formx.stream/assets/img/shield.svg",
            title: "Flexibility & Security",
            details: "Take full control of how you collect data via JS or POST. Security by design."
        },
        {
            id: 2,
            img: "https://formx.stream/assets/img/message.svg",
            title: "Auto Responders",
            details: "Let your submitters know you’re listening. Automate confirmation mails with just one click."
        },
        {
            id: 3,
            img: "https://formx.stream/assets/img/notification.svg",
            title: "Instant Notifications",
            details: "Stay updated with submissions through email, Slack and other channels of your choice."
        },
        {
            id: 4,
            img: "https://formx.stream/assets/img/spam.svg",
            title: "Instant Notifications",
            details: "Stay updated with submissions through email, Slack and other channels of your choice."
        },
        {
            id: 5,
            img: "https://formx.stream/assets/img/analysis.svg",
            title: "User Submission Insights",
            details: "Keep track of submitters’ activity to ensure increased conversions."
        },
        {
            id: 6,
            img: "https://formx.stream/assets/img/crm.svg",
            title: "Simplified Management",
            details: "Organize your submissions based on their progress."
        },
        {
            id: 7,
            img: "https://formx.stream/assets/img/users.svg",
            title: "Multi-User Access ",
            details: "Your entire team can access your dashboard, for improved collaboration and productivity."
        },
        {
            id: 8,
            img: "https://formx.stream/assets/img/promotion.svg",
            title: "more to come",
            details: "Coming Up : Field based submission routing, branded thank you pages."
        },
    ]

  return (
    <Container fluid className='d-flex flex-column align-items-center addFeatures__container'>
        <Row className='d-flex text-center addFeatures__row1'>
            <Col  className='addFeatures__row1--column'>
                <h2>What do we have?</h2>
            </Col>
        </Row>
        <Row className='addFeatures__rowCards'>
            {data.slice(0, 4).map(item => {
                return(
                    <Col className='d-flex flex-column text-center align-items-center addFeatures__rowCards--column'  key={item.id} xs={12}
                    lg={3} >
                    <img src={item.img} alt={item.title}/>
                    <h4>{item.title}</h4>
                    <p style={{color: "#666666"}}>{item.details}</p>
                </Col>
                )
            })}
        </Row>
        <Row className='addFeatures__rowCards'>
            {data.slice(4, 8).map(item => {
                return(
                    <Col className='d-flex flex-column text-center align-items-center addFeatures__rowCards--column'  key={item.id} xs={12}
                    lg={3}>
                    <img src={item.img} alt={item.title}/>
                    <h4>{item.title}</h4>
                    <p style={{color: "#666666"}}>{item.details}</p>
                </Col>
                )
            })}
        </Row>
        <Row>
            <Col>
                <a href='#'>
                    <strong style={{textDecoration: "underline", color: "#5eb1bf"}}>View all features</strong>
                </a>
            </Col>
        </Row>
    </Container>
  )
}

export default AdditionalFeatures;
