import React from 'react';
import { Card } from 'react-bootstrap'
function CardCity ({ data }) {
    return (
        <Card className='text-center'>
        <Card.Img variant="top" src={data?.urlimage} style={{ height: '200px', width: '100%', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>{data?.city}</Card.Title>
          <Card.Text>{data?.country}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardCity;