import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-terms-and-condition-model',
  templateUrl: './terms-and-condition-model.component.html',
  styleUrls: ['./terms-and-condition-model.component.scss']
})
export class TermsAndConditionModelComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
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
