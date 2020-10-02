import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AppState } from "../../store/app.reducers";
import { Store } from "@ngrx/store";
import { postProductsForControls } from '../../store/actions/products.action';
@Component({
  selector: 'app-form-references',
  templateUrl: './form-references.component.html',
  styleUrls: ['./form-references.component.css']
})
export class FormReferencesComponent implements OnInit {
  validations_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      idReference: new FormControl(0, Validators.required),
      reference: new FormControl('', Validators.required),
      descriptionReference: new FormControl('', Validators.required),
      colour: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      statusRef: new FormControl('', Validators.required),
    })

  }
  confirmData(data) {
    this.store.dispatch(postProductsForControls({ form:data }));
  }

}