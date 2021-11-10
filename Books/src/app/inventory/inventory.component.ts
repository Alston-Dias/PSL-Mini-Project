import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  bookList !: Array<Book>
  constructor(private bookdataService: BooksdataService) { }

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe(books=>{
      this.bookList = books
    },err=>console.log("Error in fetching data"))
  }

  delete(id:number){
    this.bookdataService.deleteBook(id).subscribe()
    window.location.reload()
  }

}
