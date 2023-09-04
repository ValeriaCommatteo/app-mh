import { configureStore } from "@reduxjs/toolkit";
import { citiesR } from './reducers/citiesReducers.js'
// import { itineraryReducer } from './reducers/itineraryReducers.js'

const store = configureStore( {
    reducer : {
        citiesR : citiesR,
        // itineraryR : itineraryReducer
    }
} )

export default store