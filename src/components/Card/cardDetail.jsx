import React from 'react';
import { Card } from 'react-bootstrap'

function cardDetail({ data }) {
    return (
        <Card className="mb-3">
            <Card.Img orientation="top" src={data} />
            <Card.Body>
                <Card.Title>{data}</Card.Title>
                <Card.Text>{data}</Card.Text>
                <Card.Text><small className="text-medium-emphasis">Last updated 3 mins ago</small>{data}</Card.Text>
                <Button href={`//${id}`}className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>View More</Button>
            </Card.Body>
        </Card>
    );
}

export default cardDetail;