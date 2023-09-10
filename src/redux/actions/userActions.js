import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUser  = createAction( 'load_user', (user) => {

    return {
        payload : user
    }
})

export const register = createAsyncThunk('register', async (body) => {
    
    try {

        const response = await axios.post ('http://localhost:4000/api/user/register', body)
        localStorage.setItem("token", response.data.token);
        return response.data.user

    }catch(error){
        console.log()
    }
})


export const signIn = createAsyncThunk("signIn", async (payload) => {

    try {
        let { email, password } = payload
        
        const user = await axios.post("http://localhosta:4000/api/user/signin", {
            email: email,
            password: password,
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log("Successfulle logged in");
            return response.data.user
        })
        .catch((err) => 
        err.response.data.message.ferEach((message) => console.log(message))
        );

        return {
            user: user,
        }

    }catch(err){
        console.log(err.message);
    }

})

export const authenticate = createAsyncThunk("authenticate", async ()=> {

    try {
        let token = localStorage.getItem("token");

        let user = await axios.post("http://localhosta:4000/api/user/authenticate", {} , { 
            headers: {
                'Authorization': 'Bearer' + token
            }
         })
         .then((response) => {
            console.log("authenticated successfully");
            localStorage.setItem("token", response.data.token)
            return response.data.user
         })

         return {
            user: user
         }

    } catch (error) {
        console.log(error.message);
    }
})

export const logout = createAction ("reset", () => {

            localStorage.removeItem("token");
            return {
                payload : null
            }
})