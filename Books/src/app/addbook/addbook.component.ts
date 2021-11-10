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
  id !: number
  title!: string
  author !: string
  category: string = ""
  addbookFrom !: FormGroup
  constructor(private booksdataService: BooksdataService, private router: Router) {
    this.addbookFrom = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    console.log(this.id)
  }
  submit() {
    this.booksdataService.addBook({ _id: this.id, title: this.title, author: this.author, category: this.category, isRented: false }).subscribe()
    this.router.navigate(['getbooks'])
  }

}
