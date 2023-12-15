import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import { useNavigate } from "react-router-dom";
import colors from "../../Colors/Colors";


const Footer = () => {
  const navigate = useNavigate()

  const handleHomeLink = () => {
    navigate('/')
  }

  const data = [
    {
      id: 1,
      href: "#",
      title: "Badge Program"
    },
    {
      id: 2,
      href: "#",
      title: "About Our Team"
    },
    {
      id: 3,
      href: "#",
      title: "Contact Us"
    },
    {
      id: 4,
      href: "/support",
      title: "Support"
    },
    {
      id: 5,
      href: "#",
      title: "GDPR"
    },
    {
      id: 6,
      href: "#",
      title: "Terms of Service"
    },
    {
      id: 7,
      href: "#",
      title: "Privacy Policy"
    },
    {
      id: 8,
      href: "#",
      title: "Refund Policy"
    },
  ]
  return (
    <Container fluid className="d-flex flex-column align-items-center footer__container">
        <Row>
            <img onClick={handleHomeLink} src="https://formx.stream/assets/img/formx-white.png" className="footer__logo" style={{cursor: "pointer"}} alt="logo"/>
        </Row>
        <div className="footer__div">
          {
            data.map(items => {
              return (
                  <a key={items.id} href={items.href}>{items.title}</a>
              )
            })
          }
        </div>
        <br />
        <Row className="d-flex text-left mt-5">
        <span style={{fontSize: "12.8px", padding: "0px 20px"}}>
                          <span style={{color: "#5eb1bf"}}>© </span>
                          <a href="http://cyces.co" style={{ color: colors.white[100]}} className=" footer__links" target="_blank">Cyces Innovation Labs LLP. </a>
                            <span style={{color: "#5eb1bf"}}>All Rights Reserved.Icons from </span>
                            <a href="https://flaticons.com" style={{ color: colors.white[100]}} className=" footer__links" target="_blank">Flaticon. </a>
                            <span style={{color: "#5eb1bf"}}>Illustrations from </span>
                            <a href="https://undraw.co" style={{ color: colors.white[100]}} className=" footer__links" target="_blank">Undraw</a>
                    </span>
        </Row>
    </Container>
  )
}

export default Footer;
