import { configureStore } from "@reduxjs/toolkit";
import { citiesR } from './reducers/citiesReducers.js'
import { itinerariesR } from '../redux/reducers/itinerariesReducer.js'
import { userR } from './reducers/userReducers.js'

const store = configureStore( {
    reducer : {
        citiesR : citiesR,
        itinerariesR : itinerariesR,
        user: userR
    }
} )

export default store