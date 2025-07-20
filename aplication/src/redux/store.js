import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice } from "./navigationSlice";
import { registerDataSlice } from "./registerDataSlice";

export const store = configureStore({
    reducer: {
        navigationSate: navigationSlice.reducer,
        registerDataSlice: registerDataSlice.reducer
    }
})