import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchCombinations = createAsyncThunk(
    "combinations",
    async (page: number, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/combinations?pageIndex=${page}&pageSize=33`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch facts");
        }
    })