import { createSlice } from "@reduxjs/toolkit";
import { fetchRewiews } from "../api/reviews";
import { ReviewTypeState } from "../types/state";
import { ReviewType } from "../types";


const initialState: ReviewTypeState = {
    status: null,
    error: false,
    totalPage: 0,
    currentPage: 1,
    data: [],
};


export const rewiewSlice = createSlice({
    name: "rewiews",
    initialState,
    reducers: {
        incPageRewiews: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRewiews.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchRewiews.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.totalPage = payload.meta.total_pages;
            state.data = [ ...state.data, ...payload.items.filter((review: ReviewType) => !state.data.some((item) => review.reviewId === item.reviewId))]
        }),
        builder.addCase(fetchRewiews.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})


export const { incPageRewiews } = rewiewSlice.actions