import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edituserprfoile',
  templateUrl: './edituserprfoile.component.html',
  styleUrls: ['./edituserprfoile.component.css']
})
export class EdituserprfoileComponent implements OnInit {

  id:any;
  username:string;

  userObject:any={};
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    //read id from url
   console.log(this)
    console.log("id is ",this["id"]);
    console.log("username is ",this["username"]);
    //get user object
    this.us.getUser(this["id"]).subscribe(
      userObj=>{
            this.userObject=userObj;
      },
      err=>{
        alert("something went wrong in reading user's profile");
        console.log(err);
      }
    );
    

  }

  saveUserProfile(ngFormObject:NgForm){
    let editedUserObject=ngFormObject.value;
    console.log(editedUserObject);
      //create new user object
      let  newUserObjectToSave:any={};
      newUserObjectToSave.id=this.userObject.id;
      newUserObjectToSave.username=this.userObject.username;
      newUserObjectToSave.password=this.userObject.password;
      newUserObjectToSave.email=editedUserObject.email;
      newUserObjectToSave.dob=editedUserObject.dob;
      newUserObjectToSave.gender=this.userObject.dob;

      console.log("user object after editing is ",newUserObjectToSave);

      this.us.saveEditedUserObject(newUserObjectToSave).subscribe(
        res=>{
          console.log(res);
          //navigate to user profile
          alert("user profile updated successfully");
          this.router.navigateByUrl(`user/userdashboard/${res.id}/${res.username}/userprofile`);

        },
        err=>{console.log(err)}
      );

  }

}
