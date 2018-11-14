import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Venue } from 'src/app/shared/model/show-time/venue';
import { RowDates } from 'src/app/shared/model/show-time/row-dates';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-show-timings',
  templateUrl: './show-timings.component.html',
  styleUrls: ['./show-timings.component.scss']
})
export class ShowTimingsComponent implements OnInit {
  _venues: Venue;
  _rowDates: RowDates;
  modalRef: BsModalRef;

  @Input()
  set venues(value: Venue){
    
    this._venues=value;
    //console.log("passed value",value);
  }
  @Input()
  set rowDates(value: RowDates){
    
    this._rowDates=value;
    //console.log("passed value",value);
  }



  constructor(private modalService: BsModalService,private _routerObj:Router) { }

  ngOnInit() {

  }

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
navigateToSeatLayout(venue:any,movie:any){
  //seatLayout
  console.log(venue);
  console.log(movie);
  this._routerObj.navigate(['/seatLayout',{venue:venue,movie:movie}]);
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
   this.modalService.onHidden.subscribe((reason: string) => {
      const _reason = reason ? `, dismissed by ${reason}` : '';
       console.log("reason for dialog close:"+_reason);
      //this.messages.push(`onHidden event has been fired${_reason}`);
      //this.unsubscribe();
    })
}
}
