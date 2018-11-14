import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Venue } from 'src/app/shared/model/show-time/venue';
import { RowDates } from 'src/app/shared/model/show-time/row-dates';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LocationService} from '../../shared/header/location/location.service'

@Component({
  selector: 'app-show-timings',
  templateUrl: './show-timings.component.html',
  styleUrls: ['./show-timings.component.scss']
})
export class ShowTimingsComponent implements OnInit {
  
  modalRef: BsModalRef;

  

  constructor(private modalService: BsModalService,private _routerObj:Router,private locationSer: LocationService) { }

  ngOnInit() {
    this.locationSer.getData().subscribe(  (resp) => {    
    console.log("Iam ur new service::::"+resp);
      })
  }

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
navigateToSeatLayout(){
  //seatLayout
  this._routerObj.navigate(['/seatLayout']);
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
