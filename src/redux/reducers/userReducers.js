import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";


const initialState = {
    token: null,
    user: {
      email: "",
      _id: "",
    }
  };

const userR = createReducer(initialState, (builder) => {
      return  builder 

      .addCase(userActions.loadUser, ( stateActual, action ) => {
        console.log('entra loadUser')
        return {
            ...stateActual,
            user : action.payload
         }
        } )

        .addCase(userActions.register.fulfilled, ( stateActual, action ) => {
          console.log('entra register')
            console.log('entra?')
            return {
                ...stateActual,
                user: action.payload.user
            }
        } )
        // .addCase(userActions.register.fulfilled, ( stateActual, action ) => {
        //     console.log('entra?')
           
        //     let userData = {
        //         user : action.payload.user || null,
        //         token : action.payload.token || null
        //     }
        //     return {
        //         ...stateActual,
        //         ...userData
        //     }
        // } )
        .addCase(userActions.signIn, (stateActual, action) => {
          console.log('entra signIn')
            return { 
                user: action.payload.user,
                token: action.payload.token,
        }
      })
        .addCase(userActions.authenticate.fulfilled, (stateActual, action) => {
          console.log('entra authenticate')
          console.log(action.payload)
            return { 
                user: action.payload.user, 
                token: action.payload.token,
      };
    })
        .addCase(userActions.logout, (stateActual, action) => {
          console.log('entra logout')
            console.log(initialState)
            return initialState
        } )
    })

    export default userR;