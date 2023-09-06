import { configureStore } from "@reduxjs/toolkit";
import { citiesR } from './reducers/citiesReducers.js'
// import { itineraryR } from './reducers/itineraryReducers.js'
// import { userR } from './reducers/userReducer.js'

const store = configureStore( {
    reducer : {
        citiesR : citiesR,
        // itineraryR : itineraryR,
        // userR: userR
    }
} )

export default store