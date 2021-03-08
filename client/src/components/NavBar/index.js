import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg='light' variant='pills' expand='md'>
            <Navbar.Brand href='/'>Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/'>Search</Nav.Link>
                    <Nav.Link href='/saved'>Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;