import React from 'react'
import './style.css'

function Footer() {
  
  return (
    <footer className="fixed-bottom">
        <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h6>© 2023 Copyright</h6>
</footer>

  )
}

export default Footer