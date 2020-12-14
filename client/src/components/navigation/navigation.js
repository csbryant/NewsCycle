import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../../img/180icontransparent.png';
import { Button } from 'react-bootstrap';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/front">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <a href="/team">
                        <Button variant="secondary" size="sm">About Us</Button>
                    </a>
                </Nav>
            </Navbar>
        </>


    );
}

export default Navigation;
