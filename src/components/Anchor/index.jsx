import React from 'react'
import './style.css'
import Nav from 'react-bootstrap/Nav';

function Anchor({ href, title }) {

  return (
    <>
      <Nav className='bg-secundary justify-content-center' defaultActiveKey="/contacto" as="ul">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={href}>{title}</a>
          </li>
        </ul>
      </Nav>
    </>
  );
}

export default Anchor
