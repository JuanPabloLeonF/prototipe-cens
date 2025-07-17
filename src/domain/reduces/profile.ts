import { createSlice } from "@reduxjs/toolkit";
import { initialStateProfile } from "../models/reduces";
import { REDUCER_PROFILE } from "../models/envirments";

export const profileSlice = createSlice({
    name: REDUCER_PROFILE,
    initialState: initialStateProfile,
    reducers: {
        updateData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const { updateData } = profileSlice.actions