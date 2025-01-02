import { createSlice } from "@reduxjs/toolkit";
import { BeanState } from "../types/state";
import { fetchBean } from "../api/Bean";

const initialState: BeanState = {
    status: null,
    error: false,
    data: null,
};


export const beanSlice = createSlice({
    name: "bean",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBean.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchBean.fulfilled, (state, actions) => {
            state.status = "fulfilled"
            state.error = false
            state.data = actions.payload
        }),
        builder.addCase(fetchBean.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})
