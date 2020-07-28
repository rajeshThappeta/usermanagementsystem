import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //inject Router service
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  userLogin(ngformObject:NgForm){
   
    let userObj=ngformObject.value;
    //verify the role
    //if the role is admin
    if(userObj.role=="admin"){
      //verify username and password
    //for admin,username & password are "admin"
    //verify username
      if(userObj.username!=="admin"){
        alert("Invalid username");
      }
      else if(userObj.password!=="admin"){
        alert("Invalid password")
      }
      else{
        //navigate to admin dash board component
        this.router.navigate(['admin/admindashboard',userObj.username]);
      }

    }

    //if the role is user
    if(userObj.role=="user"){

      //call getUsers() from user service
      this.userService.getUsers().subscribe(
        usersArray=>{
              //find length of array
              if(usersArray.length==0){
                alert("no user found");
              }

              //couter variable
              let counter=0;

              //iterate usersArray
              for(let userObject of usersArray){

                //compare username
                if(userObject.username==userObj.username){
                  //compare password
                  if(userObject.password==userObj.password){
                      //NAVIGATE TO USER DASH BOARD along with username as url param
                      this.userService.userloginstatus=true;
                     
                      this.router.navigate(['user/userdashboard',userObject.id,userObject.username]);
                      return;
                  }
                  //if password is not matched
                  else{
                    alert("Invalid password");
                    return;
                  }
                }
                //if username is not matched
                else{
                    counter++;
                }
              }

              //check counter variable
              if(counter>0){
                alert("user name is not existed");

              }

        },
        err=>{
          alert("something went wrong...");
          console.log("error in reading users ",err);
        }
      );


    }



  }
}
