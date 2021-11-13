import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BooksListComponent } from './books-list/books-list.component';
import { RentedbooksComponent } from './rentedbooks/rentedbooks.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditbookComponent } from './editbook/editbook.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BooksListComponent,
    RentedbooksComponent,
    InventoryComponent,
    AddbookComponent,
    EditbookComponent,
    LoginpageComponent,
    RegistrationComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
