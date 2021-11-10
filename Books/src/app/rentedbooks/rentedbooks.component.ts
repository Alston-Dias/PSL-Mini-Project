import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-rentedbooks',
  templateUrl: './rentedbooks.component.html',
  styleUrls: ['./rentedbooks.component.css']
})
export class RentedbooksComponent implements OnInit {

  booksList !: Array<Book>
  constructor( private booksdataService : BooksdataService) { }

  ngOnInit(): void {
    this.booksdataService.getBooks().subscribe(books =>{
      this.booksList = books
    },err=>console.log("Error in fetching data"+err))
  }

  returning(id:number){
    this.booksdataService.putRentBooks(id,{isRented:false}).subscribe()
    window.location.reload()
  }

}
