import React from 'react'
import './style.css'

function Footer() {
  
  return (
    <footer className="fixed-bottom">
        
        <h5>Valeria S. Commatteo</h5>
        <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <h6>© 2023 Copyright</h6>
</footer>

  )
}

export default Footer