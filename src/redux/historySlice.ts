import { createSlice } from "@reduxjs/toolkit";
import { fetchHistory } from "../api/history";
import { HistoryState } from "../types/state";
import { History } from "../types";


const initialState: HistoryState = {
    status: null,
    totalPage: 0,
    currentPage: 1,
    error: false,
    data: [],
};


export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        incPageHistory: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHistory.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchHistory.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.data = [ ... state.data, ...payload.items.filter((item: History) => !state.data.some((hist) => hist.mileStoneId === item.mileStoneId  ))]
            state.totalPage = payload.totalPages;
        }),
        builder.addCase(fetchHistory.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})

export const { incPageHistory } = historySlice.actions