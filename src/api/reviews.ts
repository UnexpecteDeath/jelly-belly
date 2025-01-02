import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRewiews = createAsyncThunk(
    "rewiew",
    async (page: number, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://47e6fb67e2581e01.mokky.dev/rewiews/?page=${page}&limit=10`);
            if(!res.ok) {
                throw new Error('server error')
            }
            return await res.json();
        } catch(e) {
            console.error("API request failed:", e);
            return rejectWithValue("Failed to fetch recipies");
        }
    })