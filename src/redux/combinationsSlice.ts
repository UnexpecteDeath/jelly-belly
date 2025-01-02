import { createSlice } from "@reduxjs/toolkit";
import { fetchCombinations } from "../api/combinations";
import { CombinationsState } from "../types/state";
import { Combinations } from "../types";


const initialState: CombinationsState = {
    status: null,
    totalPage: 0,
    currentPage: 1,
    error: false,
    data: [],
};


export const combinationsSlice = createSlice({
    name: "combinations",
    initialState,
    reducers: {
        incPageCombinations: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCombinations.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchCombinations.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.data = [...state.data, ...payload.items.filter((comb: Combinations) => !state.data.some((item) => item.combinationId === comb.combinationId)) ]
            state.totalPage = payload.totalPages;
        }),
        builder.addCase(fetchCombinations.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})

export const { incPageCombinations } = combinationsSlice.actions