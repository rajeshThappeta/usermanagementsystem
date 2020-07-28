import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   fee:number=20000;
   average:number=0.25;

   student:object={sno:100,name:"rajesh"};

   today=new Date();

   n:number=5;
   
  constructor() { }

  ngOnInit(): void {
  }

}
