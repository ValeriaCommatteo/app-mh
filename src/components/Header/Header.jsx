import React from 'react'
import Nav from '../Nav/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'

function Header() {
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
        <Col  xs={{ order: 1 }}>
        <Button variant="outline-light" style={{backgroundColor: 'indigo'}}>Login</Button>
        </Col>
      </Row>
      </Container>
    </header>
  )
}

export default Header