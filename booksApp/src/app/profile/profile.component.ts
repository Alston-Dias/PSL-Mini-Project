import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';
import { Cart } from '../cart';
import { DataService } from '../data.service';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  searchText : any;
  username !:string
  booksList !: Array<Book>
  wishlist : Array<Wishlist> = []
  cart : Array<Cart> = []
  uname!:any
  userobj :Array<User> =[]
  constructor(private  bookdataService : BooksdataService, private data :  DataService, private userdataService : UserdataService) { }

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

    this.userdataService.getuser('reynold1234').subscribe(data=> {
      this.userobj.push(data)
      console.log("User "+this.userobj)
    })
  }

}
