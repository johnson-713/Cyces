import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

    const handleSignUp = () => {
      navigate('/signUp')
    }

    const handleHomeLink = () => {
      navigate('/')
    }

    const data = [
      {
        id: 1,
        href: "/features",
        item: "Features"
      },
      {
        id: 2,
        href: "/pricing",
        item: "Pricing"
      },
      {
        id: 3,
        href: "/support",
        item: "Support"
      },
      {
        id: 4,
        href: "/blog",
        item: "Blog"
      },
      {
        id: 5,
        href: "#",
        item: "Instant Demo"
      },
      {
        id: 6,
        href: "#",
        item: "Agency"
      },
      {
        id: 7,
        href: "#",
        item: "Login"
      },
    ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container >
        <Navbar.Brand href="/" onClick={handleHomeLink}>
            <img src='https://formx.stream/assets/img/formx-white.png' alt='logo' width={100} />
        </Navbar.Brand>
        <Navbar.Toggle id='navbar-toggler-icon' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {data.map(items => {
              return (
                <Nav.Link key={items.id} href={items.href} style={{padding: "8px 11.2px 8px 8px", color: "#ffffff"}}>{items.item}</Nav.Link>
              )
            })}
            <Button className='navButton' onClick={handleSignUp}>Get started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
