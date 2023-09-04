import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import logo from '../../assets/portada.jpg'
import ActionButton from '../Button/Button'

function Section({ title, txt }) {
    return (
        <>
            <section className="card-event">
                <Card style={{ width: '800px' }}>
                    <div className="card-content">
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title className='title'>{title}</Card.Title>
                            <Card.Text>{txt}</Card.Text>
                            <ActionButton />
                        </Card.Body>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default Section