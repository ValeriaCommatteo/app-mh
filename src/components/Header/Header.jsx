import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'

function Header() {

  let [title, setTitle] = useState("Contacto")

  let [step, setStep] = useState(1)

  const handlerTitle = () => {
    title = "Titulo cambiado"
  }
  return (

    <header className="fixed-top">
      <Container>
        <Row>
          <Col md={8} className='titulo'>
            MyItenerary
          </Col>
          <Col xs={{ order: 12 }}>
            <Nav />
          </Col>
          <Col xs={{ order: 1 }}>
            <Button variant="outline-light" style={{ backgroundColor: 'indigo' }}>Login</Button>
          </Col>
        </Row>
      </Container>
      <button onClick={() => handlerTitle()}>Cambiar</button>
    </header>
  )
}

export default Header