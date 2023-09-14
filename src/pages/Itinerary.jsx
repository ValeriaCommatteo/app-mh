import React from 'react'
import Card from 'react-bootstrap/Card';
import ActionButton from '../components/Button/Button';
import Row from 'react-bootstrap/Row';
import './Style/itineraryStyle.css'

function Itinerary() {
  return (
    
    <Row className="d-flex flex-column justify-content-center align-items-center">
          <Card className='text-center card-under' style={{ marginTop:'50px' }}>
            <Card.Img variant="top" src="https://syrte.obspm.fr/taiol/Under%20Construction.PNG" />
            <Card.Body>
              <Card.Title>Under Contructions</Card.Title>
              <Card.Text>
               At the moment this section is under construction, come back later. Know how to apologize for the inconvenience.
              </Card.Text>
            </Card.Body>
            <ActionButton />
          </Card>
    </Row>
  );
}

export default Itinerary
