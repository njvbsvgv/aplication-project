import { createSlice } from "@reduxjs/toolkit";

export const registerDataSlice = createSlice({
    name: "registerDataSlice",
    initialState: {
        steper: 1
    },
    reducers: {
        changeRegisterSteper: (state, action) => {
            state.steper = action.payload
        }
    }
})