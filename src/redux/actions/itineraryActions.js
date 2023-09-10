import { createAction } from "@reduxjs/toolkit"

const get_itineraries = createAction('get_cities', (arr) => { 
    return {
      payload: {
        cities: arr
      }
    }
  }
)

const get_itinerary = createAction('get_city', (data) => { 
  return {
    payload: {
      cities: data
    }
  }
}
)

const getItinerariesAction = { get_itineraries, get_itinerary}

export default getItinerariesAction