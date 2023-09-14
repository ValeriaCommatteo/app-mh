import { createReducer } from "@reduxjs/toolkit";
import getCitiesAction from '../actions/citiesActions'

const initialState = {
    cities : [{
      name:"",
      country: "",
      description: "",
      urlImage: "",
    }],
    filteredCities: [],
}
export const citiesR = createReducer( initialState, ( builder ) => 
    builder

        .addCase( getCitiesAction.get_cities, (stateActual, action) => {
            const newState = {...stateActual, cities : action.payload.cities, filteredCities: action.payload.cities}
            return newState
        } )

        .addCase( getCitiesAction.get_city, (stateActual, action) => {
              const newState = {...stateActual, cities: action.payload.cities}
              return newState
        })

        .addCase(getCitiesAction.filterCities, (stateActual, action) => {
            const filteredSearch = stateActual.cities.filter((city) =>
              city.name.toLowerCase().startsWith(action.payload.inputValue.toLowerCase())
            );
            return { ...stateActual, filteredCities: filteredSearch };
          })
        // .addCase( cargarCitiesAsync.fulfilled, (stateActual, action ) => {
        //     return { ...stateActual, allCities : action.payload, filteredCities : action.payload}
        // } )

        // .addCase( cargarCityAsync.fulfilled, (stateActual, action ) => {
        //     return { ...stateActual, city : action.payload, filteredCities : action.payload }
        // } )
)
