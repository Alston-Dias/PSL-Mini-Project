import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  signupForm:FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.signupForm=new FormGroup({
      
    
     })
  }
  

  ngOnInit(){
      this.signupForm=this.fb.group({
        firstname:new FormControl('',[Validators.required]),
        lastname:new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(6)])
        
      })}
   get password(){
     return this.signupForm.get('password');
  }
  get confirmpassword(){
    return this.signupForm.get('confirmpassword');
 }
}
