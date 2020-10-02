import { Component, OnInit } from '@angular/core';
import { AppState } from "../../store/app.reducers";
import { Store } from "@ngrx/store";
import { getInventoryForControls } from '../../store/actions/products.action';

@Component({
  selector: 'app-selectinventory',
  templateUrl: './selectinventory.component.html',
  styleUrls: ['./selectinventory.component.css']
})
export class SelectinventoryComponent implements OnInit {
  inventory: any[] = null
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getInventoryForControls());
    this.store
      .select("product")
      .subscribe(({ data }) => {
        this.inventory = data;
      });
  }

}
