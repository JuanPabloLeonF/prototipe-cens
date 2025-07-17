import { createSlice } from "@reduxjs/toolkit";
import { initialStateLogin } from "../models/reduces";
import { REDUCER_LOGIN } from "../models/envirments";

export const loginSlice = createSlice({
    name: REDUCER_LOGIN,
    initialState: initialStateLogin,
    reducers: {
        login: (state, action) => {
            state.message = action.payload
        }
    }
})

export const { login } = loginSlice.actions