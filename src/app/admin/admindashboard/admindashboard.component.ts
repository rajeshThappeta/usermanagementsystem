import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  username:string;
  //inject ActivatedRoute service
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {

      this.username= this.ar.snapshot.paramMap.get("username")
  }

}
