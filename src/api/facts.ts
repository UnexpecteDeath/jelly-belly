import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchFacts = createAsyncThunk(
    "facts",
    async (page: number, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/facts?pageIndex=${page}&pageSize=33`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch facts");
        }
    })