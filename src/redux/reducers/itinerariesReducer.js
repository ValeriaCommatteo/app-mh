import { createReducer } from "@reduxjs/toolkit"
import getItinerariesAction from '../actions/itineraryActions'

const initialState = {
  itineraries: [],
  itinerary : {}
}

export const itinerariesR = createReducer(initialState, (builder) => {
  return builder

    .addCase(getItinerariesAction.load_itineraries.fulfilled, (stateActual, action) => {
      return { ...stateActual, itineraries: action.payload }
    })
    .addCase(getItinerariesAction.get_itinerary.fulfilled, (stateActual, action) => {
      return { ...stateActual, itineraries: action.payload }
    })
})
