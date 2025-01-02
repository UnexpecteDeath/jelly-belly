import { configureStore } from "@reduxjs/toolkit";
import { beansSlice } from "./beansSlice";
import { useDispatch } from "react-redux";
import { factsSlice } from "./factsSlice";
import { beanSlice } from "./beanSlice";
import { recipiesSlice } from "./recipiesSlice";
import { recipeSlice } from "./recipeSlice";
import { combinationsSlice } from "./combinationsSlice";
import { historySlice } from "./historySlice";
import { rewiewSlice } from "./rewiewsSlice";



export const store = configureStore({
    reducer: {
        beans: beansSlice.reducer,
        bean: beanSlice.reducer,
        facts: factsSlice.reducer,
        recipies: recipiesSlice.reducer,
        recipe: recipeSlice.reducer,
        combinations: combinationsSlice.reducer,
        history: historySlice.reducer,
        rewiews: rewiewSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();