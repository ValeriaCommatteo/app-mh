import React from 'react';
import { Card } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import { Link as Anchor } from 'react-router-dom';

function CardComponent({ src, city, country, id }) {
  return (
    <Card className='text-center' style={{ height: '280px', width: '290px' }}>
      <Card.Img variant="top" src={src} style={{ height: '150px', width: '290px', objectFit: 'cover' }}/>
      <Card.Body style={{ paddingTop:'5px', paddingBottom:'5px', paddingLeft:'5px', paddingRight:'5px'}}>
        <Card.Title>{city}</Card.Title>
        <Card.Text>{country}</Card.Text>
        <Anchor to={`/details/${id}`}className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>View More</Anchor>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
