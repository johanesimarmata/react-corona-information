import React from 'react'
// import styles from'./Navbar.module.css'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'

const Navigationbar = ({toggle}) => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>
                    Covid-19 Info
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => {toggle('Global')}}>Global</Nav.Link>
                        <Nav.Link onClick={() => {toggle('Indonesia')}}>Indonesia</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;