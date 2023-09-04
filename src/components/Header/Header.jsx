import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'
import { Link as Anchor } from 'react-router-dom';
import Cities from '../../pages/Cities';
import Home from '../../pages/Home'

function Header() {

  let [title, setTitle] = useState("Home")

  let [step, setStep] = useState(1)

  const handlerTitle = () => {
    title = "Titulo cambiado"
  }
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col titulo">
            MyItinerary
          </div>
          <div className="col-auto ms-auto">
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3"><a href="/" className="home-link">Home</a></li>
              <li><a href="/cities">Cities</a></li>
            </ul>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;