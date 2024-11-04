import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary w-100 fixed-top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img src={logo} className='py-3 ' alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" w-100 justify-content-end">
                            <NavLink to="/" className='ms-5 navstyle'>HOME</NavLink>
                            <NavLink to="/about" className='ms-5 navstyle'>ABOUT US</NavLink>
                            <NavLink to="/service" className='ms-5 navstyle'>SERVICES</NavLink>
                            <NavLink to="/contact" className='ms-5 navstyle'>CONTACT US</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
