import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //inject user service obj
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    
  }

  userRegistration(ngFormObject:NgForm){

      let userObject=ngFormObject.value;
      console.log(userObject);

      //post this user object to json-server
    this.userService.createUser(userObject).subscribe(
      res=>{
        console.log(res);
        alert("User created successfully");

        //navigate to login component
        this.router.navigate(["login"])
        
      },
      err=>{
        alert("Error in user creation");
        console.log(err);
      }
    );
    
  }

}
