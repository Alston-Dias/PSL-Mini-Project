import { AdduserService } from './../adduser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersLogin } from '../loginuser';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email !: string
  password!: string
  constructor(private router:Router,private add:AdduserService) { }

  ngOnInit(): void {
  }


  check() {
    this.add.checkUser({email: this.email, password:this.password }).subscribe(

      data=>{
        console.log(data)
        if(data=="user"){
        this.router.navigate(['/getbooks'])//product list
        }
        else if(data=="admin"){
          this.router.navigate(['/inventory'])//inventory
          console.log(data)
        }
        else if("Invalidu"){
           console.log("invalid password and email")
           this.router.navigate(['/userlogin'])


        }
        else{
          console.log("invalid email")
        }
      }
    )

      // data=>{




      // error=>console.log(error)

    }
    //to home page

  register(){
    this.router.navigate(['/register'])


  }
}


