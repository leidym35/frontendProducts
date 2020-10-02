import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { getProductsByIdForControls,putProductsForControls } from '../../store/actions/products.action';
import { AppState } from "../../store/app.reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-update-references',
  templateUrl: './update-references.component.html',
  styleUrls: ['./update-references.component.css']
})
export class UpdateReferencesComponent implements OnInit {
  validations_form: FormGroup;
  product: any[]
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id)
    this.store.dispatch(getProductsByIdForControls({ id }));
    
    this.store
      .select("product")
      .subscribe(({ data }) => {
        this.product = data;
        console.log(this.product)
      });
      
    this.validations_form = this.formBuilder.group({
      idReference: this.product[0].idReference,
      reference: new FormControl('', Validators.required),
      descriptionReference: new FormControl('', Validators.required),
      colour: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      statusRef: new FormControl('', Validators.required),
    })
  }
  confirmData(data) {
    this.store.dispatch(putProductsForControls({ form:data })); 
  }
}
