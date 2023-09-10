import { createReducer } from "@reduxjs/toolkit"
import getItinerariesAction from '../actions/itineraryActions'

const initialState = {
  itineraries: []
}

export const itinerariesR = createReducer(initialState, (builder) => 
  builder

      .addCase(
        getItinerariesAction.get_itineraries, (state, action) => {
          const newState = { ...state, itineraries: action.payload.itineraries }
          return newState
      })
)
