import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { RentedBooksComponent } from './rented-books/rented-books.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterComponent } from './filter/filter.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    BooksListComponent,
    RentedBooksComponent,
    WishlistComponent,
    AddbookComponent,
    EditbookComponent,
    InventoryComponent,
    CartComponent,
    UserRegistrationComponent,
    FilterComponent,
    ProfileComponent,
    EditprofileComponent,
    ViewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
