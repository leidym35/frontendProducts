import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL } from "../../environments/baseUrl";
import { map } from "rxjs/operators";

 @Injectable({
  providedIn: 'root'
}) 
export class ProductService {
  private baseURL: string
  constructor(public http: HttpClient) {
    this.baseURL = URL.base;
  }

  postProductsService(form: object) {
    return this.http.post(`${this.baseURL}/addProducto`, form);
  }

  getProductsService() {
    return this.http
      .get(`${this.baseURL}/productos`)
      .pipe(map((data) => {
        return data;
      }));
  }

  getByIdProductsService(id) {
    return this.http
      .get(`${this.baseURL}/productos/${id}`)
      .pipe(map((data) => {
        return data[0];
      }));
  }

  updateProductsService(form:object) {
    console.log(form)
    return this.http
      .put(`${this.baseURL}/productoUpdate/${form["idReference"]}`, form)
  }
  postInventoryService(form: object) {
    return this.http.post(`${this.baseURL}/addInventario`, form);
  }
  getInventoryService() {
    return this.http
      .get(`${this.baseURL}/inventario`)
      .pipe(map((data) => {
        return data;
      }));
  }

}
