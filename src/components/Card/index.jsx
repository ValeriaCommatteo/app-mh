import React from 'react';
import CardBoostrap from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Card = ({ imagen, city, country, id }) => {
  return (
    <Card style={{ width: '18rem' }} onClick={() => navigate(`/cities/${id}`)}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Text>{country}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Card;