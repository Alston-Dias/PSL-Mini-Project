import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  token = sessionStorage.getItem('token')
  token2 : any

  constructor(private  http : HttpClient) { }

  getuser(id: string):Observable<User>{
    this.token2 = this.token?.toString()
    return  this.http.get<User>('http://localhost:3000/users/getuser/'+id,{headers:new HttpHeaders().append('x-access-token',this.token2)})
  }

  loginCheck(username: string, password: string): Observable<User>{
    return this.http.post<User>('http://localhost:3000/users/login',{username:username,password:password})
  }

  addUser(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/users/adduser',data)
  }

  editUser(id:any,User: User): Observable<any> {
    this.token2 = this.token?.toString()
    return this.http.put("http://localhost:3000/users/updateuser/"+id, User,{headers:new HttpHeaders().append('x-access-token',this.token2)})
  }
}

