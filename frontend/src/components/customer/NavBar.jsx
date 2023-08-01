import {
    Navbar, Nav,
    Container,
    NavDropdown
} from 'react-bootstrap'
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
                    <Nav.Link onClick={() => navigate('/portal')}>Bills</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => navigate('/profile')}>
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate('/login')}>
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
