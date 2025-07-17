import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../reduces/login";
import { profileSlice } from "../reduces/profile";

export const storeGlobal = configureStore({
    reducer: {
        login: loginSlice.reducer,
        profile: profileSlice.reducer
    },
    //se pueden añadir middlewares
})  

export type RootState = ReturnType<typeof storeGlobal.getState>
export type AppDispatch = typeof storeGlobal.dispatch
