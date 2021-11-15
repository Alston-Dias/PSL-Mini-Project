import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { Book } from '../books';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  bookList : Array<Book>;
  
  

  constructor(public bookService: BookserviceService) {
    this.bookList= new Array<Book>();
    let b1 = new Book(1,"Days of our Lives","Jeff Daniels","Fiction","../../assets/images/bb.png",false);
    let b2 = new Book(2,"Far Cry 3","Ubisoft","Fiction","../../assets/images/bb.png",false);
    let b3 = new Book(3,"Double dexter","Dexter Morgan","Knowledge","../../assets/images/bb.png",false);
    let b4 = new Book(4,"Far Cry 4","Ubisoft","Knowledge","../../assets/images/bb.png",false);
    let b5 = new Book(5,"Operations Research","Damon Salvatore","Research","../../assets/images/bb.png",false);
    let b6 = new Book(6,"Far Cry 5","Ubisoft","Research","../../assets/images/bb.png",false);
    this.bookList.push(b1);
    this.bookList.push(b2);
    this.bookList.push(b3);
    this.bookList.push(b4);
    this.bookList.push(b5);
    this.bookList.push(b6);
   }
   ngOnInit(): void {
    this.getBookList();
  }
    getBookList(){
      return this.bookList;
    }
  
  getfilteredBooks(value:any){
    this.bookList=this.bookList.filter((item:any)=> item.category==value)
    //console.log(this.bookList)
    
  }
  
}
