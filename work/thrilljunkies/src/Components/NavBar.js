import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import NavLink from 'react-bootstrap/esm/NavLink';

export default function NavBar() {

    return (
      <>
        <Navbar expand="xl">
          <Container className='m-0'>
            <Navbar.Brand as={NavLink} to="/Home" className='col-2 p-0 m-0'><img src={logo} width={120} height={100} alt='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/Home" className='col-1 mx-5 fs-3 '>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/Parks" className='col-2 mx-4 fs-3 text-nowrap'>All Parks</Nav.Link>
                <Nav.Link as={NavLink} to="/Parks/Attractions" className='col-3 mx-4 fs-3 text-nowrap'>All Attractions</Nav.Link>
                <form className='pt-1 col-5'>                
                  <input className='text-nowrap text-center fs-4' type='text' label="Search" placeholder='Search'/><button className='fs-4 px-1'>🔍</button>
                </form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}