import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Book } from '../books';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit,OnChanges {
  
  //@Input('bookListInput') bookListInput: any
  @Output() filterBooks = new EventEmitter()

  constructor() {

  }

  ngOnChanges(){
    //console.log(this.bookListInput);
    }
  ngOnInit(): void {
    
  }
  filter(value:string){
    //this.arrayTofilter=this.bookListInput.filter((item:any)=> item.category==value)
    //console.log(this.arrayTofilter);
    this.filterBooks.emit(value)
  }
  




}
