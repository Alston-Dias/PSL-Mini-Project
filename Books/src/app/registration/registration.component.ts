import { Router } from '@angular/router';
import { AdduserService } from './../adduser.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  id !: number
  fname!: string
  lname !: string
  email !: string
  password!: string
  //adduserFrom  !: FormGroup
  
  constructor(private add:AdduserService,private router:Router){
    

  }


  ngOnInit(): void {
  }
  submit() {
    this.add.addUser({ fname: this.fname, lname: this.lname, email: this.email, password:this.password }).subscribe()
    this.router.navigate(['/userlogin'])//back to login page
  }


}
