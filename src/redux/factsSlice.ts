import { createSlice } from "@reduxjs/toolkit";
import { fetchFacts } from "../api/facts";
import { FactState } from "../types/state";
import { Fact } from "../types";


const initialState: FactState = {
    status: null,
    totalPage: 0,
    currentPage: 1,
    error: false,
    data: [],
};


export const factsSlice = createSlice({
    name: "facts",
    initialState,
    reducers: {
        incPageFacts: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFacts.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchFacts.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.data = [...state.data, ...payload.items.filter((fact: Fact) => !state.data.some((item) => item.factId === fact.factId))] // Добавление бобов в state, фильтрация данных с апи.
            state.totalPage = payload.totalPages;
        }),
        builder.addCase(fetchFacts.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})

export const { incPageFacts } = factsSlice.actions