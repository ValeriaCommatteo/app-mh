import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
function CardCity ({ data }) {
    console.log('data desde cardcity')
    console.log(data)

    return (
        <Card className='text-center' style={{ marginLeft:'50px', height: '280px', width: '290px' }}>
        <Card.Img variant="top" src={data?.urlimage} style={{ height: '150px', width: '290px', objectFit: 'cover' }}/>
        <Card.Body style={{ paddingTop:'5px', paddingBottom:'5px', paddingLeft:'5px', paddingRight:'5px'}}>
          <Card.Title>{data?.city}</Card.Title>
          <Card.Text>{data?.country}</Card.Text>
          <Link to="/cities" className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>Back to the cities </Link>
        </Card.Body>
      </Card>
    )
}

export default CardCity;