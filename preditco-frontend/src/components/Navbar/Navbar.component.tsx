//Bootstrap components imports
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logos/logo-predicto.svg';
//Import style
import './Navbar.scss'


const NavbarCustom = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand><img src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Statistics</Nav.Link>
              <Nav.Link>Predictions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarCustom;