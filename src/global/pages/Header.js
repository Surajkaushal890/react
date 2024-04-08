import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>
      <div className='p-0 bg-colorNav'>
        <Navbar expand="lg" className='navbar navbar-expand-lg navbar-light p-0'>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="ms-auto">
                <Nav.Link href="#" className="text-white">Home</Nav.Link>
                <Nav.Link href="#" className="text-white">Services</Nav.Link>
                <Nav.Link href="#" className="text-white">About Us</Nav.Link>
                <Nav.Link href="#" className="text-white">Blog</Nav.Link>
                <Nav.Link href="#" className="text-white">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
