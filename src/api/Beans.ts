import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./index";

export const fetchBeans = createAsyncThunk(
    "beans",
    async (page: number, { rejectWithValue }) => {
        try {
            const res = await fetchData(`/beans?pageIndex=${page}&pageSize=15`);
            return res;
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch beans");
        }
    })