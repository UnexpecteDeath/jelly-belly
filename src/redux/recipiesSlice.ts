import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipies } from "../api/recipies";
import { RecipesState } from "../types/state";
import { Recipes } from "../types";


const initialState: RecipesState = {
    status: null,
    error: false,
    totalPage: 0,
    currentPage: 1,
    data: [],
};


export const recipiesSlice = createSlice({
    name: "recipies",
    initialState,
    reducers: {
        incPageRecipies: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipies.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchRecipies.fulfilled, (state, { payload }) => {
            state.status = "fulfilled"
            state.error = false
            state.totalPage = payload.totalPages
            state.data = [ ...state.data, ...payload.items.filter((recipe: Recipes) => !state.data.some((item) => recipe.recipeId === item.recipeId))]
        }),
        builder.addCase(fetchRecipies.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})


export const { incPageRecipies } = recipiesSlice.actions