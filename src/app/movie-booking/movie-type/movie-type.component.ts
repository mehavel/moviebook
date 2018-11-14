import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.scss']
})
export class MovieTypeComponent implements OnInit {
  @Input() movieGenreModel: any;
  constructor() { }

  ngOnInit() {
  }

}
