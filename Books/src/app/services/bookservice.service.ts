import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  bookData = []
  constructor() {

   }
   setBooks(bookData:any){
     this.bookData= bookData;
     
   }
   getBooks(){
     return this.bookData;
   }
}
