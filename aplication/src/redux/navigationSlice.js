import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "navigationSlice",

    initialState: {
        navLink: "/"
    },

    reducers: {
        changeNaigationLink: (state, action) => {
            state.navLink = action.payload
        }
    }
})