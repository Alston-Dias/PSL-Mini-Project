import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';
import { Cart } from '../cart';
import { DataService } from '../data.service';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  searchText : any;
  username !:string
  booksList !: Array<Book>
  wishlist : Array<Wishlist> = []
  cart : Array<Cart> = []
  uname!:any
  constructor(private  bookdataService : BooksdataService, private data :  DataService) { }

  ngOnInit(): void {
    this.data.currentUsername.subscribe(username =>this.username = username)

    this.bookdataService.getBooks().subscribe(books=>{
      this.booksList = books
    },err => console.log("Error in fetching books"+err))
    console.log("Username  from booklist"+ sessionStorage.getItem('username'))
   this.uname = sessionStorage.getItem('username')
    this.bookdataService.getwishlist(sessionStorage.getItem('username')).subscribe(wishlist => {
      this.wishlist = wishlist
      console.log(this.wishlist)
    })
    this.bookdataService.getcart(sessionStorage.getItem('username')).subscribe(cart=> {
      this.cart = cart
      console.log("Here"+this.cart)
    })
  }

  // rentBook(id:number){
  //   this.bookdataService.putRentBooks(id,{isRented:true,username:sessionStorage.getItem('username')}).subscribe()
  //   window.location.reload()
  // }
  getuname(){
    return localStorage.getItem('username')
  }
  addtowishlist(id:any){
    var flag = false
    console.log("Add to wishlist called")
        for (var wish of this.wishlist){
          if(id == wish.bookid){
            flag = true
            break
          }
        }
      if(flag == false){
       alert("Book added to wishlist")
      this.bookdataService.addtowishlist({username : window.localStorage.getItem('username'), bookid:id}).subscribe()
      window.location.reload()
      }

      else{
        alert("Book already added to wishlist")
      }
    
  }
  getfilteredBooks(value:any){
    this.booksList=this.booksList.filter((item:any)=> item.category==value)
    //console.log(this.bookList)
    
  }
  allbook(value:any){
    if(value)
    this.ngOnInit();
  }
  addtocart(id:any){
    var flag = false
    console.log("Add to cart called")
    if(this.cart.length < 3){

        for (var book of this.cart){
          if(id == book.bookid){
            flag = true
            break
          }
        }
      

      if(flag == false){
       alert("Book added to cart")
      this.bookdataService.addtocart({username : window.localStorage.getItem('username'), bookid:id}).subscribe()
      window.location.reload()
      }

      else{
        alert("Book already added to cart")
      }
      
    }
    else{
      alert("Can add only 3 books to cart")
    }
    
  }

}
