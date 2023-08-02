import React from 'react'
import Section from './Section'

function Main() {
    let data = [
        {title: 'Find the perfect destination',txt:'Our app will help you finde the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning oyur next trip has never been easier.'},
        {title:'hola soy un titulo', txt:'yo soy un txt' }
    ]

  return (
    <main>
         {data.map(each=><Section title={each.title} txt={each.txt} img={each.img}></Section>)}
    </main>
  )
}

export default Main