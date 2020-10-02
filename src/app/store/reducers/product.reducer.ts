import { createReducer, on } from "@ngrx/store";
import * as products from "../actions";

export interface ProductsState {
  error: string;
  data: any;
  id: number;
  form: object;
  inventory: any
}
export const productsInitialState: ProductsState = {
  error: "",
  data: null,
  id: null,
  form: null,
  inventory:null
};
const _productsReducer = createReducer(
  productsInitialState,

  on(products.postProductsForControls, (state, { form }) => ({
    ...state,
    form,
    error: "",
  })),

  on(products.postProductSuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.postProductError, (state, { error }) => ({
    ...state,
    error,
  })),

  on(products.getProductsForControls, (state) => ({
    ...state,
    error: "",
  })),

  on(products.getProductSuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.getProductError, (state, { error }) => ({
    ...state,
    error,
  })),

  on(products.getProductsByIdForControls, (state, { id }) => ({
    ...state,
    id,
    error: "",
  })),

  on(products.getProductByIdSuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.getProductByIdError, (state, { error }) => ({
    ...state,
    error,
  })),

  on(products.putProductsForControls, (state, { form }) => ({
    ...state,
    form,
    error: "",
  })),

  on(products.putProductSuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.putProductError, (state, { error }) => ({
    ...state,
    error,
  })),

  on(products.postInventoryForControls, (state, { form }) => ({
    ...state,
    form,
    error: "",
  })),

  on(products.postInventorySuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.postInventoryError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(products.getInventoryForControls, (state) => ({
    ...state,
    error: "",
  })),

  on(products.getInventorySuccess, (state, { data }) => ({
    ...state,
    data,
    error: "",
  })),
  on(products.getInventoryError, (state, { error }) => ({
    ...state,
    error,
  })),
)



export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
