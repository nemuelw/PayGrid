import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height: '10vh'}}>
      <Container>
        <Navbar.Brand style={{cursor:'pointer'}} onClick={() => navigate('/')}>PayGrid</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link onClick={() => navigate('/login')}>Log In</Nav.Link>
            <Nav.Link onClick={() => navigate('/register')}>
                <Button variant="outline-primary">Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
