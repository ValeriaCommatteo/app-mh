import React from 'react';
import CardBoostrap from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const navigate = useNavigate()

  return (
    <CardBoostrap style={{ width: '18rem' }} onClick={() => navigate(`/cities/${data._id}`)}>
      <CardBoostrap.Img variant="top" src={data.urlimage} />
      <CardBoostrap.Body>
        <CardBoostrap.Title>{data.place}</CardBoostrap.Title>
        <CardBoostrap.Text>{data.country}</CardBoostrap.Text>
      </CardBoostrap.Body>
    </CardBoostrap>
  );
};

export default Card;