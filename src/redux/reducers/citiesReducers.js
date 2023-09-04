import { createReducer } from "@reduxjs/toolkit";
import getCitiesAction from '../actions/citiesActions'

const initialState = {
    cities : [],

}
export const citiesR = createReducer( initialState, ( builder ) => 
    builder

        .addCase( getCitiesAction.get_cities, (stateActual, action) => {
            const newState = {...stateActual, cities : action.payload.cities}
            return newState
        } )

        .addCase( getCitiesAction.get_city, (stateActual, action) => {
              const newState = {...stateActual, cities: [action.payload.cities]}
              return newState
        })

        // .addCase( filterCities, ( stateActual, action ) => {
        //     const filteredSearch = stateActual.allCities.filter( cities => cities.name.toLowerCase().startwith( action.payload.inputValue )  )
        //     let newFilteredCities = filteredSearch
        //     return {...stateActual, filteredCities : newFilteredCities }
        // } ) 

        // .addCase( cargarCitiesAsync.fulfilled, (stateActual, action ) => {
        //     return { ...stateActual, allCities : action.payload, filteredCities : action.payload}
        // } )

        // .addCase( cargarCityAsync.fulfilled, (stateActual, action ) => {
        //     return { ...stateActual, city : action.payload, filteredCities : action.payload }
        // } )
)