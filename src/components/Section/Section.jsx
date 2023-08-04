import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './style.css'
import logo from '../../assets/fotito.jpg'

function Section({title,txt}) {
  return (
    <>
      <section>
      <Card style={{ width: '550px' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{txt}</Card.Text>
        <Button variant="outline-light" style={{backgroundColor: 'indigo'}}>View More</Button>
      </Card.Body>
    </Card>
      </section>
    </>
  )
}

export default Section