import { createSlice } from "@reduxjs/toolkit";
import { fetchBeans } from "../api/Beans";
import { BeansState } from "../types/state";
import { Bean } from "../types";


const initialState: BeansState = {
    status: null,
    totalPage: 0,
    currentPage: 1,
    error: false,
    data: [],
};


export const beansSlice = createSlice({
    name: "beans",
    initialState,
    reducers: {
        incPageBeans: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBeans.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchBeans.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.data = [...state.data, ...payload.items.filter((bean: Bean) => !state.data.some((item) => item.beanId === bean.beanId))] // Добавление бобов в state, фильтрация данных с апи.
            state.totalPage = payload.totalPages;
        }),
        builder.addCase(fetchBeans.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})

export const { incPageBeans } = beansSlice.actions;