import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchRecipies = createAsyncThunk(
    "recipies",
    async (page: number, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/Recipes?pageIndex=${page}&pageSize=16`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch recipies");
        }
    })