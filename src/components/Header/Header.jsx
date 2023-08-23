import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'
import { Link as Anchor } from 'react-router-dom';
import Cities from '../../pages/Cities/index';
import Home from '../../pages/Home'

function Header() {

  let [title, setTitle] = useState("Home")

  let [step, setStep] = useState(1)

  const handlerTitle = () => {
    title = "Titulo cambiado"
  }
  return (

    <header className="fixed-top">
  <Container>
    <Row className="align-items-center">
      <Col className='titulo'>
        MyItenerary
      </Col>
      <Col xs="auto">
        <ul className="list-unstyled d-flex mb-0">
          <li className="me-3"><Anchor to="/" className="home-link">Home</Anchor></li>
          <li><Anchor to="/cities">Cities</Anchor></li>
        </ul>
      </Col>
      <Col xs={{ order: 2 }}>
        <Button variant="outline-light" style={{ backgroundColor: 'indigo'}} className="login">Login</Button>
      </Col>
    </Row>
  </Container>
</header>

  )
}

export default Header