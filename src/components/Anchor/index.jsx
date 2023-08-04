import React from 'react'
import './style.css'
import Nav from 'react-bootstrap/Nav';


export default function Anchor({href,title}) {
  return (
    <Nav className='bg-secundary justify-content-center' defaultActiveKay="/home" as="ul">
    <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={href}>{title}</a>
    </li>
  </ul>
  </Nav>
  );
}
