import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <>
            <div className='header'>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Button variant="outline-success">Button</Button>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Header;