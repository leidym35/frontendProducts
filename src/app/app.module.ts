import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormReferencesComponent } from './components/form-references/form-references.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { appReducers } from "./store/app.reducers";
import { environment } from "src/environments/environment";
import { EffectsArray } from "./store/effects";
import { InventarioComponent } from './components/inventario/inventario.component';
import { UpdateReferencesComponent } from './components/update-references/update-references.component';
import { SelectinventoryComponent } from './components/selectinventory/selectinventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormReferencesComponent,
    InventarioComponent,
    UpdateReferencesComponent,
    SelectinventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
