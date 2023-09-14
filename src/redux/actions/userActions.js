import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadUser  = createAction( 'load_user', (user) => {

    return {
        payload : user
    }
})

const register = createAsyncThunk('registerUser', async (body) => {
    
    try {

        const response = await axios.post ('http://localhost:4000/api/user/register', body)
        response.data.token && localStorage.setItem( 'token', response.data.token )
        return response.data
        // return response.data.user
    } catch (error) {
        console.log( error )
    }
} )


const signIn = createAsyncThunk("signIn", async (payload) => {

    try {
        const { email, password } = payload;    
        const response = await axios.post( 'http://localhost:4000/api/user/signin', {
            email: email,
            password: password,
          });
          
        if (response.data.user) {
        localStorage.setItem( 'token', response.data.token )
            console.log("logged in")

        return {
            user: response.data.user,
        };
    } else {
        throw new Error("User not found");
      }
    } catch (error) {
        console.log( error )
    }
} )

const authenticate = createAsyncThunk("authenticate", async ()=> {
    console.log('entra 1')

    try {
        let token = localStorage.getItem("token");
        console.log(token)

        let user = await axios.post("http://localhost:4000/api/user/authenticate", {} , { 
            headers: {
                Authorization : "Bearer " + token
              }
        })
        console.log(user)
        return {
            user : user,
            // user : response.data?.user,
            token : token
        }

    } catch (error) {
        console.log(error.message);
    }
})

const logout = createAction ("reset", () => {
    localStorage.removeItem("token");
    return {
        payload : null
    }
})


const userActions =  { logout, authenticate, signIn, loadUser, register }

export default userActions