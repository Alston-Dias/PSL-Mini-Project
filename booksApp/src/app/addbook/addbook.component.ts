import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';
import { UniquebookidService } from '../uniquebookid.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookList : Array<Book> =[];
  //id !: number
  //title!: string
  //author !: string
  //category: string = ""
  categories: Array<string>=[]
  uniquecat : Array<string>=[]
  
  IDList!:Array<any>
  addbookForm !: FormGroup
  constructor(private booksdataService: BooksdataService, private router: Router,private uniquebookidService:UniquebookidService) {
    this.addbookForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })
     this.IDList=new Array<any>()
  }

  ngOnInit(): void {
    this.booksdataService.getBooks().subscribe(
      (books) => {
        this.bookList = books;
        for(var b of this.bookList){
          //console.log(b)
          this.categories.push(b.category)
          this.IDList.push(b._id)
        }
        this.uniquecat = [...new Set(this.categories)]

        //console.log("after uniquecat "+this.uniquecat)
      },
      (err) => console.log('Error in fetching data')
    );
    this.addbookForm.controls["id"].addValidators([this.uniquebookidService.validBookId(this.IDList)])
    // for (var i of this.categories){
    //   console.log("indexes"+i)
    // }
    // console.log()
  }
  addNewBook(form: { value: {id:any, title: any; author: any; category: any; }; }) {
    const newBookData={ 
      _id:form.value.id,
      title:form.value.title,
      author:form.value.author,
      category:form.value.category,
      isRented:false,
      username:""
    };
//console.log(newBookData);
    this.booksdataService.addBook(newBookData).subscribe(data=>{
      //console.log(data);
    })
    
    this.router.navigate(['inventory'])
    alert("book added successfully")
  }

  toInventory() {
    this.router.navigate(['inventory']);
  }


    
  get id() {
    return this.addbookForm.controls['id']
  }

  
  get title() {
    return this.addbookForm.controls['title']
  }

  
  get author() {
    return this.addbookForm.controls['author']
  }

  
  get category() {
    return this.addbookForm.controls['category']
  }
}
// { _id: this.id, title: this.title, author: this.author, category: this.category, isRented: false }