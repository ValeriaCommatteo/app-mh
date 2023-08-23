import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import logo from '../../assets/fotito.jpg'
import ActionButton from '../Button/Button'

function Section({title,txt}) {
  return (
    <>
      <section className="card-event">
      <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{txt}</Card.Text>
        <ActionButton />
      </Card.Body>
    </Card>
      </section>
    </>
  )
}

export default Section