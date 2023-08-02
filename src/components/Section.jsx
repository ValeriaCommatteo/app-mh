import React from 'react'

export default function Section(title, txt, img) {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p>{txt}</p>
        <div>{img}</div>
      </section>
    </>
  )
}
