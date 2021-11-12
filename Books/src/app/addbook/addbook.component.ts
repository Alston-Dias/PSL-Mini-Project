import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookList!: Array<Book>;
  id !: number
  title!: string
  author !: string
  category: string = ""
  // addbookFrom !: FormGroup
  constructor(private booksdataService: BooksdataService, private router: Router) {
    // this.addbookFrom = new FormGroup({
    //   id: new FormControl('', [Validators.required]),
    //   title: new FormControl('', [Validators.required]),
    //   author: new FormControl('', [Validators.required]),
    //   category: new FormControl('', [Validators.required])
    // })
  }

  ngOnInit(): void {
    this.booksdataService.getBooks().subscribe(
      (books) => {
        this.bookList = books;
      },
      (err) => console.log('Error in fetching data')
    );
    
  }
  addNewBook(form: { value: {id:any, title: any; author: any; category: any; }; }) {
    const newBookData={ 
      _id:form.value.id,
      title:form.value.title,
      author:form.value.author,
      category:form.value.category,
      isRented:false,
    };
console.log(newBookData);
    this.booksdataService.addBook(newBookData).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['inventory'])
    alert("book added successfully")
  }

}
// { _id: this.id, title: this.title, author: this.author, category: this.category, isRented: false }