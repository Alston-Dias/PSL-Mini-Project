import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  constructor(private http:HttpClient) {
}
addUser(data:any): Observable<any>{

  return this.http.post("http://localhost:3000/login", data);
}
checkUser(data:any): Observable<any>{
  console.log("inside observable")
  console.log(data)
  return this.http.post("http://localhost:3000/login/register", data);


}




}
