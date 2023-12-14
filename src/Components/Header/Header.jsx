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

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container >
        <Navbar.Brand href="/" onClick={handleHomeLink}>
            <img src='https://formx.stream/assets/img/formx-white.png' alt='logo' width={100} />
        </Navbar.Brand>
        <Navbar.Toggle id='navbar-toggler-icon' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/features" className='text-light'>Features</Nav.Link>
            <Nav.Link href="/pricing" className='text-light'>Pricing</Nav.Link>
            <Nav.Link href='/support' className='text-light'>Support</Nav.Link>
            <Nav.Link href="/Blog" className='text-light'>Blog</Nav.Link>
            <Nav.Link href="#" className='text-light'>Instant Demo</Nav.Link>
            <Nav.Link href='#' className='text-light'>Agency</Nav.Link>
            <Nav.Link href='#' className='text-light'>Login</Nav.Link>
            <Button className='navButton' onClick={handleSignUp}>Get started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
