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
  userObject:any={};
  constructor(private us:UserService, private router:Router) { }

  ngOnInit(): void {
   
    console.log("user id at user profile component is ",this["id"]);
    this.us.getUser(this["id"]).subscribe(
      userObj=>{
          this.userObject=userObj;
          
      },
      err=>{
        alert("error in reading user profile ");
        console.log(err);
      }
    );

  }
 
  editUserProfile(){
    //navigate to user edit profile component
    this.router.navigateByUrl("user/userdashboard/1/username/editprofile")
  }
  

}









