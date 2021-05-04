import React from 'react';
import { Nav, Navbar, Container, Spinner, Button,InputGroup,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="Header">
            <Navbar id="navbar" expand="lg" sticky="top">
                <Navbar.Brand href="#home" id="brand">FOOD CLUB 🍗🍽🍔</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Link className="link" to="/home">HOME</Link>
                        <Link className="link" to="/orders">ORDER</Link>
                        <Link className="link" to="/deals">DEALS</Link>
                        <Link className="link" to="/addfood">ADDFOOD</Link>
                        <Link className="link" id="login" to="/features"><Link to="/login">LOGIN</Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <div>

                <p id="Name">WELCOME...</p>
                <p>TO OUR FOOD CLUB.HERE WE SERVE FRESH FOOD.AND YOU CAN ORDER YOUR DESERVE FOOD.</p>
                <p>WE ARE OPEN 24 HOURS...</p>

            </div>
        </div>
    );
};

export default Header;