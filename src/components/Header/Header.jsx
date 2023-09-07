import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './style.css'
import Cities from '../../pages/Cities';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  let [title, setTitle] = useState("Home")

  let [step, setStep] = useState(1)

  const handlerTitle = () => {
    title = "Titulo cambiado"
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container style={{ marginTop: '0px' }}>
        <Navbar.Brand>MyItinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

          <Nav>
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/cities">Cities</Nav.Link>
          </Nav>
          <Nav>
            <button className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>Login</button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;