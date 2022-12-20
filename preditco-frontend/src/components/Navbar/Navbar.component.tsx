//Bootstrap components imports
import { Navbar, Nav, Container } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../../assets/logos/logo-predicto.svg";
//Import style
import "./Navbar.scss";

const NavbarCustom = () => {
  return (
    <Navbar expand="md" className="fixed-top">
      <Container fluid>
        <Navbar.Brand>
          <ReactLogo className="w-50" />
        </Navbar.Brand>
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
  );
};

export default NavbarCustom;
