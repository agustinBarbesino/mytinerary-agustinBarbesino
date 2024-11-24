import { createReducer } from "@reduxjs/toolkit"
import { registerUser } from "../actions/registerActions"

const initialState = {
    loading: false,
    error: false,
    success: false
}

const registerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.loading = false,
            state.error = false,
            state.success = true
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = false,
            state.error = true,
            state.success = false
        })
})

export default registerReducer