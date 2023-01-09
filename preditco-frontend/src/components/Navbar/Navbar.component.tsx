//React core imports
import { useEffect, useState } from "react";
//Bootstrap components imports
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Import logos
import { ReactComponent as PredictoLogo } from "../../assets/logos/logo-predicto.svg";
import { ReactComponent as PredictoLogoWhite } from "../../assets/logos/logo-predicto-white.svg";
import { ReactComponent as InfosenseLogo } from "../../assets/logos/logo-infosense-navbar.svg";
import { ReactComponent as IstatLogo } from "../../assets/logos/logo-istat.svg";
import { ReactComponent as Github } from "../../assets/logos/gitHubwhite.svg";

//Import style
import "./Navbar.scss";

const NavbarCustom = () => {
  // state to handle if the navbar is open or not
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  // Navbar is always close when the page is rendered
  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden");
  }, [navbarOpen]);

  return (
    <Navbar
      expand="md"
      className={`fixed-top shadow ${navbarOpen ? "bg-blue" : "bg-skyblue"}`}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand>
          <Link to="/home">
            {navbarOpen ? (
              <PredictoLogoWhite />
            ) : (
              <PredictoLogo className="w-75" />
            )}
          </Link>
        </Navbar.Brand>

        {/* 
        Hamburger menu.
        If navbar is greater then md size of the page (based on bootstrap sizes) shows the hamburger menu 
        */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className={`${
            navbarOpen ? "is-active text-white" : ""
          } menu-toggle d-md-none`}
        />

        {/* 
        Navbar links.
        If hamburger menu is open, when you click a link, the menu will close 
        */}
        <Navbar.Collapse className={`${navbarOpen ? "show" : ""}`}>
          <Nav
            className={`ms-md-auto text-black ${
              navbarOpen ? "min-h-90 text-white" : ""
            }`}
          >
            <Link
              className={`nav-link text-black nav-link-font ${
                navbarOpen ? "mt-4 mx-2 text-white" : ""
              }`}
              to="/home"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              className={`nav-link text-black nav-link-font ${
                navbarOpen ? "m-2 text-white" : ""
              }`}
              to="/statistics?province=Torino&activityType=alberghi+3+stelle&country=Italia"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Statistics
            </Link>
            <Link
              className={`nav-link text-black nav-link-font ${
                navbarOpen ? "m-2 text-white" : ""
              }`}
              to="/predictions"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Predictions
            </Link>
            {navbarOpen ? (
              <div>
                <Link className="nav-link text-black nav-link-font" to="#">
                  <Github className="nav-svg-github ms-2 text-white" />
                  </Link>
                <Link className="nav-link text-black nav-link-font" to="#">
                <IstatLogo className="nav-svg-istat" />
                  </Link>
              </div>
            ) : (
              ""
            )}

            {/* Navbar mobile footer */}
            {navbarOpen ? (
              <footer className="mt-auto py-3 nav-footer">
                <Row className="mb-4">
                  <Col className="text-center">Privacy</Col>
                  <Col className="text-center">Contact</Col>
                  <Col className="text-center">Terms</Col>
                </Row>
                <Row className="mb-3">
                  <Col className="text-muted d-flex justify-content-start nav-copyrigth-text">
                    2023 @ all right reserved
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <InfosenseLogo className="w-75" />
                  </Col>
                </Row>
              </footer>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
