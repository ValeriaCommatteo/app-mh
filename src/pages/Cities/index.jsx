import React from 'react'

function Cities() {

  return (
    <>
     <h2 className='cities-title'>Cities</h2>
      <h3 className='cities-text'>Collection of the most beautiful places and experience</h3>

      <CityFilter cities={data} />
    </>
  )
}

export default Cities