import React from 'react';
import { Card } from 'react-bootstrap'

function cardDetail({ src, city, country, id }) {
    return (
        <Card className="mb-3">
            <Card.Img orientation="top" src="/images/react.jpg" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Card.Text><small className="text-medium-emphasis">Last updated 3 mins ago</small></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default cardDetail;