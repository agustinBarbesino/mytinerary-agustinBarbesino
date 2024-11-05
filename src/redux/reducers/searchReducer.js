import { createReducer } from "@reduxjs/toolkit";
import { setSearch } from "../actions/searchActions";

const initialState = {
    search: ''
};

const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearch, (state, action) => {
            state.search = action.payload
        })
});

export default searchReducer