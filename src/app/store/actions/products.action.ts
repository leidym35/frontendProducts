import { createAction, props } from "@ngrx/store";

export const postProductsForControls = createAction(
    "[PRODUCTS] POST products references",
    props<{ form: object}>()
  );
  
  export const postProductSuccess = createAction(
    "[PRODUCTS] POST products reference success",
    props<{ data: any}>()
  );
  
  export const postProductError = createAction(
    "[PRODUCTS]  POST products reference Error ",
    props<{ error: string }>()
  );

  export const getProductsForControls = createAction(
    "[PRODUCTS] GET products references"
  );
  
  export const getProductSuccess = createAction(
    "[PRODUCTS] GET products reference success",
    props<{ data: any}>()
  );
  
  export const getProductError = createAction(
    "[PRODUCTS]  GET products reference Error ",
    props<{ error: string }>()
  );

  export const getProductsByIdForControls = createAction(
    "[PRODUCTS] GET products By id references",
    props<{ id: number }>()
  );
  
  export const getProductByIdSuccess = createAction(
    "[PRODUCTS] GET products By id reference success",
    props<{ data: any}>()
  );
  
  export const getProductByIdError = createAction(
    "[PRODUCTS]  GET products  By idreference Error ",
    props<{ error: string }>()
  );

  export const putProductsForControls = createAction(
    "[PRODUCTS] PUT products references",
    props<{ form: object }>()
  );
  
  export const putProductSuccess = createAction(
    "[PRODUCTS] PUT products  reference success",
    props<{ data: any}>()
  );
  
  export const putProductError = createAction(
    "[PRODUCTS]  PUT products reference Error ",
    props<{ error: string }>()
  );

  export const postInventoryForControls = createAction(
    "[PRODUCTS] POST inventory to references",
    props<{ form: object}>()
  );
  
  export const postInventorySuccess = createAction(
    "[PRODUCTS] POST inventory toreference success",
    props<{ data: any}>()
  );
  
  export const postInventoryError = createAction(
    "[PRODUCTS]  POST inventory to reference Error ",
    props<{ error: string }>()
  );

  export const getInventoryForControls = createAction(
    "[PRODUCTS] GET Inventory references"
  );
  
  export const getInventorySuccess = createAction(
    "[PRODUCTS] GET Inventory reference success",
    props<{ data: any}>()
  );
  
  export const getInventoryError = createAction(
    "[PRODUCTS]  GET Inventory reference Error ",
    props<{ error: string }>()
  );
