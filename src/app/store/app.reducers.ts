import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

export interface AppState {
  product: reducers.ProductsState;
}

export const appReducers: ActionReducerMap<AppState> = {
    product: reducers.productsReducer
};