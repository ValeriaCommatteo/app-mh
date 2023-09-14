import React from 'react';
import { Card } from 'react-bootstrap'
import { Link as Anchor } from 'react-router-dom';

function CardComponent({ src, city, country, id }) {
  return (
    <Card className='text-center'>
      <Card.Img variant="top" src={src} style={{ height: '200px', width: '100%', objectFit: 'cover' }}/>
      <Card.Body style={{ paddingTop:'5px', paddingBottom:'5px', paddingLeft:'5px', paddingRight:'5px'}}>
        <Card.Title>{city}</Card.Title>
        <Card.Text>{country}</Card.Text>
        <Anchor to={`/details/${id}`}className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>View More</Anchor>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
