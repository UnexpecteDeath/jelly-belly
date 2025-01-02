import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchRecipe = createAsyncThunk(
    "recipe",
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/Recipes/${id}`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch bean");
        }
    })