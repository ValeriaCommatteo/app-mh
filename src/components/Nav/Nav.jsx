import React from 'react'
import Anchor from '../Anchor'
import { Link as Anchor } from 'react-router-dom' 

export default function Navbar() {
    let data = [
        {href: "home.html",title:"Home"},
        {href: "cities.html",title:"Cities"}
    ]

  return (
    <nav>
    {data.map((each,key)=><Anchor key={key} href={each.href} title={each.title} />)}
    </nav>
  )
}
