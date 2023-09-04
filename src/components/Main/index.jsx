import React from 'react'
import Section from '../Section/Section'

function Main() {
    let data = [
        {title: 'Find the perfect destination',txt:'Our app will help you finde the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning oyur next trip has never been easier.'}
    ]
  return (
    <main>
         {data.map((each,indice)=><Section key={indice} title={each.title} txt={each.txt}></Section>)}
    </main>
  )
}

export default Main