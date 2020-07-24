import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userloginstatus:boolean=false;

  constructor(private hc:HttpClient) { }

  //to create user
  createUser(userObj):Observable<any>{

    console.log(userObj);
    //make http post req
   return  this.hc.post('http://localhost:3000/users',userObj);
  }


  //to read all users
  getUsers():Observable<any[]>{
   return this.hc.get<any[]>("http://localhost:3000/users");
  }

  //to read profile of a user
  getUser(id):Observable<object>{
   return this.hc.get<object>(`http://localhost:3000/users/${id}`);
  }

  userLogout(){
    this.userloginstatus=false;
  }

}
