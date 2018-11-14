import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-timings',
  templateUrl: './show-timings.component.html',
  styleUrls: ['./show-timings.component.scss']
})
export class ShowTimingsComponent implements OnInit {
  @Input() movieTimeModel: any;
  constructor() { }

  ngOnInit() {
  }

}
