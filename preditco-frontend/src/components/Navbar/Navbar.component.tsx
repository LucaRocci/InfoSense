//React core imports
import { useEffect, useState } from 'react';
//Bootstrap components imports
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';
//Import logos 
import {ReactComponent as PredictoLogo} from '../../assets/logos/logo-predicto.svg';
import {ReactComponent as PredictoLogoWhite} from '../../assets/logos/logo-predicto-white.svg';
import {ReactComponent as InfosenseLogo} from '../../assets/logos/logo-infosense-navbar.svg';
import {ReactComponent as IstatLogo} from '../../assets/logos/logo-istat.svg';

//Import style
import "./Navbar.scss";

const NavbarCustom = () => {

  const [ show, setShow ] = useState<boolean>(false);
  const [ navbarOpen, setNavbarOpen ] = useState<boolean>(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);

    if(show){
    setTimeout(() => {
      setShow(!show)
    },300)
  }else
   setShow(!show)
  }

  useEffect(() => {
    document.body.classList.toggle('overflow-y-hidden');
  }, [show]) 

    return(
        <Navbar expand="md" className={`fixed-top ${show?'bg-blue':'bg-skyblue'}`}>
        <Container fluid>
          <Navbar.Brand>{show?<PredictoLogoWhite />:<PredictoLogo className='w-75' />}</Navbar.Brand>
          <Button onClick={handleToggle} className='navbar-button d-md-none'/>
          <Navbar.Collapse className={`${navbarOpen ? 'show' : ''}`}>
            <Nav className={`ms-md-auto text-black ${show?'min-h-90 text-white':''}`}>
              <Link className={`nav-link text-black nav-link-font ${show?'mt-4 mx-2 text-white':''}`} to='/home' onClick={() => {setNavbarOpen(false); setShow(false)}}>Home</Link>
              <Link className={`nav-link text-black nav-link-font ${show?'m-2 text-white':''}`} to='/statistics?province=Torino&activityType=alberghi+3+stelle&country=Italia' onClick={() => {setNavbarOpen(false); setShow(false)}}>Statistics</Link>
              <Link className={`nav-link text-black nav-link-font ${show?'m-2 text-white':''}`} to='/predictions' onClick={() => {setNavbarOpen(false); setShow(false)}}>Predictions</Link>
              {show? 
              <Row className='d-flex flex-row align-items-center mt-4'>
                <Github className='nav-svg-github ms-2' /> <IstatLogo className='nav-svg-istat' />
              </Row>:''}
              {show?
              <footer className='mt-auto py-3 nav-footer'>
                <Row className='mb-4'>
                  <Col className='text-center'>Privacy</Col>
                  <Col className='text-center'>Contact</Col>
                  <Col className='text-center'>Terms</Col>
                </Row>
                <Row className='mb-3'>
                  <Col className='text-muted d-flex justify-content-start nav-copyrigth-text'>2022 @ all right reserved</Col>
                  <Col className='d-flex justify-content-end'><InfosenseLogo className='w-75' /></Col>
                </Row>
              </footer>:''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarCustom;
