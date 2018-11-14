import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  name:any = [
    { "id": 0, "name": "Shock" },
    { "id": 1, "name": "rock" },
    { "id": 0, "name": "Mock" },
    { "id": 0, "name": "Mock" },
    { "id": 0, "name": "Mockito" },
    { "id": 1, "name": "rock" }
  ]

  constructor() { }

  ngOnInit() {

    
  }
  
}
