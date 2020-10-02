import { Component, OnInit } from '@angular/core';
import { AppState } from "../../store/app.reducers";
import { Store } from "@ngrx/store";
import { getProductsForControls } from '../../store/actions/products.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = null
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsForControls());


    this.store
      .select("product")
      .subscribe(({ data }) => {
        this.products = data;
        console.log(this.products)
      });
  }

}
