import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipe } from "../api/recipe";
import { RecipeState } from "../types/state";



const initialState: RecipeState  = {
    status: null,
    error: false,
    data: null,
};


export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipe.pending, (state) => {
            state.status = "pending"
            state.error = false
        }),
        builder.addCase(fetchRecipe.fulfilled, (state, actions) => {
            state.status = "fulfilled"
            state.error = false
            state.data = actions.payload
        }),
        builder.addCase(fetchRecipe.rejected, (state) => {
            state.status = "rejected",
            state.error = true
        })
    }
})
