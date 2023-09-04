import { createAction } from "@reduxjs/toolkit"

const get_cities = createAction('get_cities', (arr) => { 
    return {
      payload: {
        cities: arr
      }
    }
  }
)

const get_city = createAction('get_city', (data) => { 
  return {
    payload: {
      cities: data
    }
  }
}
)

const getCitiesAction = { get_cities, get_city}

export default getCitiesAction