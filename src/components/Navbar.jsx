import React from 'react'
import Anchor from './Anchor'

export default function Navbar() {
    let data = [
        {href: "home.html",title:"Home"},
        {href: "cities.html",title:"Cities"}
    ]

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Tinerary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex" id="navbarNav">
        {data.map((each,key)=><Anchor href={each.href} title={each.title} />)}
        <button type="button" class="btn btn-outline-light" style="background-color: indigo;">Login</button>
      </div>
    </div>
  </nav>
  )
}
