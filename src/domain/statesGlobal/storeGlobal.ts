import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../reduces/login";


export const storeGlobal = configureStore({
    reducer: {
        //aqui se combinan todos mis reducers
        login: loginSlice.reducer
    },
    //se pueden añadir middlewares
})  

export type RootState = ReturnType<typeof storeGlobal.getState>
export type AppDispatch = typeof storeGlobal.dispatch
