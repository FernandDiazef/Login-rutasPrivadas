import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/auth';

const NavBarCustom = () => {

    const auth = useAuth()

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Link to="/" className='text-black me-4 text-decoration-none fs-4 fw-bold'>React-Login-Prueba</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/profile" className={`me-3 text-decoration-none text-dark ${auth.user !== null ? '' : 'd-none'}`}>Profile</Link>
                            <Link to="/logout" className={`me-3 text-decoration-none text-dark ${auth.user !== null ? '' : 'd-none'}`}>Logout</Link>
                            <Link to="/login" className={`me-3 text-decoration-none text-dark ${auth.user !== null ? 'd-none' : ''}`}>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export { NavBarCustom };