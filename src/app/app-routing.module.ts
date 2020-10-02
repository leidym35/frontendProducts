import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormReferencesComponent } from './components/form-references/form-references.component';
import { UpdateReferencesComponent } from "./components/update-references/update-references.component";
import { InventarioComponent } from "./components/inventario/inventario.component"
import { SelectinventoryComponent } from "./components/selectinventory/selectinventory.component"
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'formReferences',
    component: FormReferencesComponent
  },
  {
    path: 'update/:id',
    component: UpdateReferencesComponent
  },
  {
    path: 'inventario/:id',
    component: InventarioComponent
  },
  {
    path: 'selectInventario',
    component: SelectinventoryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
