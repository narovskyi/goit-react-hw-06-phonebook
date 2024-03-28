import { createSlice } from "@reduxjs/toolkit";

let filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;