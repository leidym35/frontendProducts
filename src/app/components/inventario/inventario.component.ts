import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AppState } from "../../store/app.reducers";
import { Store } from "@ngrx/store";
import { postInventoryForControls } from '../../store/actions/products.action';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  validations_form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id)

    this.validations_form = this.formBuilder.group({
      cant_inventory: new FormControl(0, Validators.required),
      idReference: id,
    })
  }
  confirmData(data) {
  this.store.dispatch(postInventoryForControls({ form:data }))
  }
}
