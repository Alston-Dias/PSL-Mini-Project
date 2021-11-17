import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  uname:any;
  userobj:User;
  og_userobj:User;

  constructor(private userdataService : UserdataService,private router: Router,private route: ActivatedRoute)
   {
     this.userobj=new User();
     this.og_userobj=new User();
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('username')
    this.userdataService.getuser(this.uname).subscribe(data=>{
      this.userobj=data
      Object.assign(this.og_userobj,data)
    })
  }

  update(){
    this.userdataService.editUser(this.uname,this.userobj).subscribe()
    Object.assign(this.og_userobj,this.userobj)
    alert("details updated successfully")
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  resetdefault(){
    Object.assign(this.userobj,this.og_userobj)
  }





  
}
