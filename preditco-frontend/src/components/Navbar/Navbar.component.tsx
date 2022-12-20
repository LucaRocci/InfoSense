//React core imports
import { useEffect, useState } from 'react';
//Bootstrap components imports
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
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

  const handleToggle = () => {
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-md-auto text-white ${show?'min-h-90':''}`}>
              <Link className={`nav-link text-white nav-link-font ${show?'mt-4 mx-2':''}`} to='/home'>Home</Link>
              <Link className={`nav-link text-white nav-link-font ${show?'m-2':''}`} to='/statistics'>Statistics</Link>
              <Link className={`nav-link text-white nav-link-font ${show?'m-2':''}`} to='/predictions'>Predictions</Link>
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
