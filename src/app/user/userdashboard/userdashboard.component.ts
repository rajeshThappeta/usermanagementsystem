import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  username:string;
  id:number;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    
   this.username= this.ar.snapshot.paramMap.get("username");
   this.id=(+this.ar.snapshot.paramMap.get("id"));
  }

  onActivate(event){
    
    //add ID to event object
    event.id=this.id;
    console.log(event);
  }

}
