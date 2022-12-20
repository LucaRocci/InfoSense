//Bootstrap components imports
import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo-predicto.svg';
//Import style
import './Navbar.scss'


const NavbarCustom = () => {

  const [ show, setShow ] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-y-hidden');
  }, [show]) 

    return(
        <Navbar bg="light" expand="md" className='fixed-top'>
        <Container fluid>
          <Navbar.Brand><img src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShow(!show)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-md-auto ${show?'d-flex flex-column align-items-center min-h-90':''}`}>
              <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/statistics'>Statistics</Link></Nav.Link>
              <Nav.Link><Link to='/predictions'>Predictions</Link></Nav.Link>
              {show?
              <Container fluid className='mt-auto'>
                <Row>
                  <Col className='text-center'>A</Col>
                  <Col className='text-center'>B</Col>
                </Row>
                <Row>
                  <Col className='text-center'>C</Col>
                  <Col className='text-center'>D</Col>
                  <Col className='text-center'>E</Col>
                </Row>
              </Container>:''}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarCustom;