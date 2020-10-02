import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of, from } from "rxjs";
import { ProductService } from "../../services/product.service";
import * as productsAction from "../actions";


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private ProductService: ProductService,
    private router: Router
  ) { }

  saveProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.postProductsForControls),
      mergeMap(({ form }) => {
        return this.ProductService
          .postProductsService(form)
          .pipe(
            map((data) => {
              alert("Se agrego con exito")
              return productsAction.postProductSuccess({ data });
            }),
            catchError((error) => {
              alert("Error, no se pudo agregar el producto")
              return of(
                productsAction.postProductError({
                  error: error,
                })
              );
            })
          );
      })
    )

  )
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.getProductsForControls),
      mergeMap(() =>
        this.ProductService.getProductsService().pipe(
          map((data) =>
            productsAction.getProductSuccess({ data })
            
          ),
          catchError((error) => {

            return of(
              productsAction.getProductError({
                error: error,
              })
            );
          })
        )
      )
    )
  );

  getProductsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.getProductsByIdForControls),
      mergeMap(({ id }) => {
        return this.ProductService
          .getByIdProductsService(id)
          .pipe(
            map((data) => {
              return productsAction.getProductByIdSuccess({ data });
            }),
            catchError((error) => {
              alert("Error, no se pudo obtener la informacion del producto")
              return of(
                productsAction.getProductByIdError({
                  error: error,
                })
              );
            })
          );
      })
    )
  )

  updateProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.putProductsForControls),
      mergeMap(({ form }) => {
        return this.ProductService
          .updateProductsService(form)
          .pipe(
            map((data) => {
              alert("Se actualizo con exito")
              return productsAction.putProductSuccess({ data });
            }),
            catchError((error) => {
              alert("Error, no se pudo actualizar el producto")
              return of(
                productsAction.putProductError({
                  error: error,
                })
              );
            })
          );
      })
    )

  )
  saveInventory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.postInventoryForControls),
      mergeMap(({ form }) => {
        return this.ProductService
          .postInventoryService(form)
          .pipe(
            map((data) => {
              alert("Se agrego con exito")
              return productsAction.postInventorySuccess({ data });
            }),
            catchError((error) => {
              alert("Error, no se pudo agregar el producto")
              return of(
                productsAction.postInventoryError({
                  error: error,
                })
              );
            })
          );
      })
    )

  )
  getInventory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.getInventoryForControls),
      mergeMap(() =>
        this.ProductService.getInventoryService().pipe(
          map((data)=> {
            return productsAction.getInventorySuccess({ data });
          }),
          catchError((error) => {
            return of(
              productsAction.getInventoryError({
                error: error,
              })
            );
          })
        )
      )
    )
  );
}