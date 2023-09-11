import React from 'react'

function CardDetail({cityImage, cityName, CityDesc}) {

  return (
    <div className="flex flex-col mx-auto  mt-28 space-y-2 items-center ">
    <img  className="aspect-square w-1/2 rounded-2xl" src={cityImage} />
    <h2 className="font-bold text-fuchsia-700">{cityName} </h2>
    <p>{CityDesc}</p>
   
</div>
  )
}

export default CardDetail