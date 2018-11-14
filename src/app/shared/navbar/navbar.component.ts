import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
status: any;
  constructor() { }

  ngOnInit() {
   this.status =  'nowshowing'; // highlight active class for first menu
  }

}
