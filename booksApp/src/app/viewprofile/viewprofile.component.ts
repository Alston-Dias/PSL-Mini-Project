import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  uname!:any
  userobj :User;

  constructor(private userdataService : UserdataService,private router: Router,private activatedRoute:ActivatedRoute) { 
    this.userobj=new User();
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('username')
    this.userdataService.getuser(this.uname).subscribe(data=>{
      this.userobj=data
    })
  }

  editnav(id: any){
    this.router.navigate(["/editprofile",id])
  }
}
