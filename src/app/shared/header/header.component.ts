import { Component, OnInit, TemplateRef, EventEmitter, ViewChild, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserModel } from '../model/user.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Modal
  modalRef: BsModalRef;
  userModel: UserModel = {} as UserModel;
  private loggedIn: boolean;
  @Input() event: any;
  
  constructor(private modalService: BsModalService, private router: Router,private authService: AuthService) {}

    hideModal(event:any){
      console.log("event propogated::::" + event.data);
      //this.userModel = {} as UserModel;
      console.log(this.userModel);
      this.userModel.userId = event.data;
      console.log(this.userModel);
      this.modalRef.hide();
      this.loggedIn = true;
      //this.userModel = {} as UserModel;
      //this.userModel.userId = event.data;
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
   
  logoutUser(){
    console.log(this.authService);
    //this.authService.signOut();
    this.loggedIn = false;
}

  ngOnInit() {
    //console.log("triggered ngOnInit");
    //this.authService.authState.subscribe((user) => {
    //this.user = user;
    //this.loggedIn = (user != null);
  //});
  }
}
