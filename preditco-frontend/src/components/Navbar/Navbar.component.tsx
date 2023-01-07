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
import React from 'react';

const NavbarCustom = () => {

  const [ navbarOpen, setNavbarOpen ] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-y-hidden');
  }, [navbarOpen]) 

    return(
        <Navbar expand="md" className={`fixed-top shadow ${navbarOpen?'bg-blue':'bg-skyblue'}`}>
        <Container fluid>
          <Navbar.Brand><Link to="/home">{navbarOpen?<PredictoLogoWhite />:<PredictoLogo className='w-75' />}</Link></Navbar.Brand>
          <button onClick={() => setNavbarOpen(!navbarOpen)} className={`${navbarOpen ? 'is-active text-white' : '' } menu-toggle d-md-none`}/>
          <Navbar.Collapse className={`${navbarOpen ? 'show' : ''}`}>
            <Nav className={`ms-md-auto text-black ${navbarOpen?'min-h-90 text-white':''}`}>
              <Link className={`nav-link text-black nav-link-font ${navbarOpen?'mt-4 mx-2 text-white':''}`} to='/home' onClick={() => {setNavbarOpen(false)}}>Home</Link>
              <Link className={`nav-link text-black nav-link-font ${navbarOpen?'m-2 text-white':''}`} to='/statistics?province=Torino&activityType=alberghi+3+stelle&country=Italia' onClick={() => {setNavbarOpen(false)}}>Statistics</Link>
              <Link className={`nav-link text-black nav-link-font ${navbarOpen?'m-2 text-white':''}`} to='/predictions' onClick={() => {setNavbarOpen(false)}}>Predictions</Link>
              {navbarOpen? 
              <Row className='d-flex flex-row align-items-center mt-4'>
                <Github className='nav-svg-github ms-2' /> <IstatLogo className='nav-svg-istat' />
              </Row>:''}
              {navbarOpen?
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
