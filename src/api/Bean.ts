import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchBean = createAsyncThunk(
    "bean",
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/beans/${id}`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch bean");
        }
    })