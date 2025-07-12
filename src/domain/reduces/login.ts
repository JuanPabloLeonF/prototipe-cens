import { createSlice } from "@reduxjs/toolkit";
import { initialStateLogin } from "../models/reduces";

export const loginSlice = createSlice({
    name: "login",
    initialState: initialStateLogin,
    reducers: {
        login: (state, action) => {
            state.message = action.payload
        }
    }
})

export const { login } = loginSlice.actions