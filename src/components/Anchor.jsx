import React from 'react'

export default function Anchor({href,title}) {
  return (
    <>
    <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href={href}>{title}</a>
    </li>
  </ul>
  </>
  )
}
