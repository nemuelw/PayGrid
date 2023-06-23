import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height: '10vh'}}>
      <Container>
        <Navbar.Brand href="#home">PayGrid</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link>Log In</Nav.Link>
            <Nav.Link>
                <Button variant="outline-primary">Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
