import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} variant="dark" expand="lg" className={"navbar"}>
            <Container>
                <Navbar.Brand onClick={() => setExpanded(false)} as={Link} to="/">InfoCountries</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/busquedaAvanzada">Búsqueda Avanzada</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/comparador">Comparador</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/galeria">Galería</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/minijuego">Mini Juego</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">Acerca de</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
