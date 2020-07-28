import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  usersList:any[]=[];
  searchTerm:string;
  searchfield:any;
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.getUsers().subscribe(
      usersArray=>{
        this.usersList=usersArray;
      },
      err=>{
        alert("error in reading users profiles");
        console.log(err);
      }
    );
  }

}
