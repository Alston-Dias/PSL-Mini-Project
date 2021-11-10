import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  booksList !: Array<Book>


  constructor(private booksdataService : BooksdataService) {

  }

  ngOnInit(): void {
    this.booksdataService.getBooks().subscribe(books =>{
      this.booksList = books
    },err=>console.log("Error in fetching data"+err))
  }

  renting(id:number){
    this.booksdataService.putRentBooks(id,{isRented:true}).subscribe()
    window.location.reload()
  }

}
