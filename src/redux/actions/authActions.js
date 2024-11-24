import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios"

const setUser = createAction("setUser", (data) => {
    return {
        payload:data,
    }
})

const logout = createAction("logout")

const login = createAsyncThunk('LOGIN', async ({email, password}) => {
    const credentials = {
        email: email,
        password: password
    }
    const response = await axios.post('http://localhost:8085/api/auth/signIn', credentials)
    
    console.log("Se proceso la solicitud de SignIn!");
    console.log(response);
    localStorage.setItem('token', response.data.token)
    return response.data
})

export { login, setUser, logout }