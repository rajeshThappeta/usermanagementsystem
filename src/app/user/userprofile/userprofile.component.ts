import { Component, OnInit, Input } from '@angular/core';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {


  id:any;
  username:string;
  userObject:any={};
  constructor(private us:UserService, private router:Router) { }

  ngOnInit(): void {
   console.log(this)
    console.log("user id at user profile component is ",this["id"]);

    this.us.getUser(this["id"]).subscribe(
      userObj=>{
          this.userObject=userObj;
          this.id=userObj["id"];
          this.username=userObj["username"];
          
      },
      err=>{
        alert("error in reading user profile ");
        console.log(err);
      }
    );

  }
 

  //update user profile
  editUserProfile(){
    //navigate to user edit profile component

    console.log("id in user profile ",this.id);
    console.log("username in user profile ",this.username);
    this.router.navigateByUrl(`user/userdashboard/${this.id}/${this.username}/editprofile`)
  }
  

  //delete user profile
  deleteUserProfile(){

    this.us.deleteUser(this.id).subscribe(
      res=>{
        alert("profile removed successfully");
        //navigate to register component
        this.router.navigateByUrl("/register");
        //change login status
        this.us.userLogout();
      },
      err=>{
        alert("something went wrong in delete");
        console.log(err);
      }
    );

  }
}









