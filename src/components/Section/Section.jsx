import React from 'react'
import './style.css'
import logo from '../../assets/portada.jpg'
import ActionButton from '../Button/Button'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from 'mdb-react-ui-kit';

function Section({ title, txt }) {
  return (
    <MDBCard background='dark' className='text-black'  style={{ marginTop:'120px'}}>
      <MDBCardImage overlay src={logo} alt='...' className='img-foto-portada' />
      <MDBCardOverlay>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{txt}</MDBCardText>
        <ActionButton toTop={true} buttonText="View More" />
      </MDBCardOverlay>
    </MDBCard>
  );
}

export default Section