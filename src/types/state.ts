import { Bean, Combinations, Fact, History, Recipes, ReviewType } from "."

export type State = {
    status: null | string,
    error: boolean,
}

export type page = {
    totalPage: number,
    currentPage: number,
}


export type BeansState = State & page & {
    data: Bean[]
}

export type FactState = State & page & {
    data: Fact[]
}

export type BeanState = State & {
    data: Bean | null
}


export type RecipesState = State & page & {
    data: Recipes[]
}

export type RecipeState = State & {
    data: Recipes | null
}

export type CombinationsState = State & page & {
    data: Combinations[]
}

export type HistoryState = State & page & {
    data: History[]
}

export type ReviewTypeState = State & page & {
    data: ReviewType[]
}