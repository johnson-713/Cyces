import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
    const navbarBackground = '#042a2b'
    const buttonBackground = '#ef7b45'

    const handleSupportLink = () => {
      navigate('/support')
    }

    
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  style={{ backgroundColor: navbarBackground, padding: "16px"}} >
      <Container >
        <Navbar.Brand href="#">
            <img src='https://formx.stream/assets/img/formx-white.png' alt='logo' width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className='text-light'>Features</Nav.Link>
            <Nav.Link href="#" className='text-light'>Pricing</Nav.Link>
            <Nav.Link href='/support' onClick={handleSupportLink} className='text-light'>Support</Nav.Link>
            <Nav.Link href="#" className='text-light'>Blog</Nav.Link>
            <Nav.Link href="#" className='text-light'>Instant Demo</Nav.Link>
            <Nav.Link href='#' className='text-light'>Agency</Nav.Link>
            <Nav.Link href='#' className='text-light'>Login</Nav.Link>
            <Button style={{ backgroundColor: buttonBackground, border: "none", padding: "10px 24px", fontWeight: "bold"}}>Get started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
