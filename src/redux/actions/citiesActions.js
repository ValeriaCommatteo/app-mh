import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const get_cities = createAction('get_cities', (arr) => {
  return {
    payload: { cities: arr }
  }
})

const get_city = createAction('get_city', (data) => {
  return {
    payload: { cities: data }
  }
})

const getCity = createAsyncThunk( 'get_city_async', async( id ) => {
  try {
      const peticion = await axios.get( 'http://localhost:4000/api/cities/city/' + id  )
      return peticion.data.response
  } catch (error) {
      
  }
})

const filterCities = createAction('filterCities', (inputValue) => {
  return {
    payload: { inputValue: inputValue }
  }
});

const getCitiesAction = { get_cities, get_city, getCity, filterCities }

export default getCitiesAction