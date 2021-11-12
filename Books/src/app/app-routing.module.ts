import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksListComponent } from './books-list/books-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RentedbooksComponent } from './rentedbooks/rentedbooks.component';

const routes: Routes = [
  {
    path : "getbooks",
    component: BooksListComponent
  },
  {
    path: 'rented',
    component: RentedbooksComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path:"addbooks",
    component: AddbookComponent
  },
  {
    path:"registration",
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
