import { createReducer } from "@reduxjs/toolkit";
import { loadUser, register, signIn, authenticate, logout } from "../actions/userActions";


const initialState = {
    user: null,
    token : null
}

export const userR = createReducer(initialState, (builder) => 
        builder 

        .addCase( loadUser, ( stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
        .addCase( register.fulfilled, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } )
        .addCase(signIn.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        }  )
        .addCase(authenticate.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } )
        .addCase( logout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        } )
)