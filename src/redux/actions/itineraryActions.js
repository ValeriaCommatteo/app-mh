import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const load_itineraries = createAsyncThunk( 'load_itineraries', async () => {
  const peticion = await axios( 'http://localhost:4000/api/itineraries' )
  return peticion.data
} )

const get_itinerary = createAsyncThunk('get_itinerary', async( id ) => { 
      const peticion = await axios.get( 'http://localhost:4000/api/itineraries/itineraryByCity/' + id  )
      return peticion.data.itinerariesFound
})

const reset_itineraries = createAction( 'reset_itineraries', () => {
   
  return { payload: { } }
})

const getItinerariesAction = { load_itineraries, get_itinerary, reset_itineraries}

export default getItinerariesAction