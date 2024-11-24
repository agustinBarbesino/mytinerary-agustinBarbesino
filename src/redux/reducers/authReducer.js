import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, logout } from "../actions/authActions";

const initialState = {
    loading: false,
    error: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token,
        state.isAuthenticated = true
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        localStorage.setItem("token", action.payload.token)
    }).addCase(login.rejected, (state, action) => {
        state.loading = false,
        state.error = true,
        state.user = null,
        state.token = null,
        state.isAuthenticated = false
    }).addCase(login.pending, (state) => {
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null,
        state.isAuthenticated = false
    }).addCase(setUser,(state,action)=>{
        state.user = action.payload.user,
        state.token = action.payload.token
    }).addCase(logout,(state,action)=>{
        localStorage.removeItem("token")
        state.user = null,
        state.token = null
        localStorage.removeItem("user");
    })
})

export default authReducer