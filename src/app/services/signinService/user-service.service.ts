import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http:HttpClient, private router:Router) { }

  addUser(user:any){
    console.log("user");
    return this.http.post("http://localhost:8080/users/addUsers",user,{headers : new HttpHeaders( {'Content-Type' : 'application/json'})});
  }
  getUsers()
  {
    return this.http.get("http://localhost:8080/users/getUsers");
  }

  authenticate(username,password)
  {
    const headers=new HttpHeaders({Authorization: 'Basic ' + btoa(username+':'+password)});

    let observable = this.http.get ('http://localhost:8080/users/validateUser',{headers});
    observable.subscribe(data => {
      sessionStorage.setItem('token',btoa(username+':' + password));
      return data;
    });
    return observable;
  }

  isLoggedIn(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }

  authentication(username: any, password: any) {
    throw new Error("Method not implemented.");
  }

}
