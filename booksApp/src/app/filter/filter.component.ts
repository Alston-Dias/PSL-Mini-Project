import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterBooks = new EventEmitter();
  @Output() allBookEvent = new EventEmitter();

  bookList : Array<Book> =[];

  categories: Array<string>=[]

  uniquecat : Array<string>=[]
  constructor(private booksdataService: BooksdataService, private router: Router) { }

  ngOnInit(): void {
    this.booksdataService.getBooks().subscribe(
      (books) => {
        this.bookList = books;
        for(var b of this.bookList){
          console.log(b)
          this.categories.push(b.category)
        }
        this.uniquecat = [...new Set(this.categories)]

        console.log("after uniquecat "+this.uniquecat)
      },
      (err) => console.log('Error in fetching data')
    );
  }
  filterCategory(value:any){
    this.filterBooks.emit(value);
  }
  allbook(){
    this.allBookEvent.emit(true);
  }

}
