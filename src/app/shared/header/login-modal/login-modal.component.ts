import { Component, OnInit, TemplateRef, EventEmitter ,Output} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RestService } from '../../service/api.service';
import { appmessage } from '../../service/errormsg.prop';
import { LogService } from '../../service/log.service';
import { UserModel } from '../../model/user.model';
import { ReqHeaderModel } from '../../model/common/reqheader.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { environment } from '../../../../environments/environment';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { AccountKit, AuthResponse } from 'ng2-account-kit';
import { ReactiveFormsModule,FormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {

  modalRef: BsModalRef;
  private user: SocialUser;
  private authFail: boolean;
  userModel: UserModel = {} as any;
  reqHeaderModel:ReqHeaderModel = {} as any;
  @Output() event:EventEmitter<any> = new EventEmitter();
  errorMsg:String;
  
  //Form 
  loginForm:FormGroup;
  email:FormControl;
  
  //Flags for ui states
  showPassword:boolean = true;
  swithtoRegister:boolean = false;
  callingApi:boolean = false;
  
  constructor(private modalService: BsModalService,
              private authService: AuthService,
              private restService: RestService,
              private logService:LogService) {}
  
  
  ngOnInit() {
       this.authFail = false;
       this.email = new FormControl("",[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]);
       this.loginForm = new FormGroup({
         email:this.email,
         password:new FormControl("",[Validators.required,Validators.minLength(2)])
       });
     this.logService.log("intializing accountkit");
      AccountKit.init({
        appId: '208879756531061',
        state: 'c1844e62-2f28-47e3-a1f8-0f6e206c07da',
        version: 'v1.1'
    });
    
  }
  //social login && account kit
  AccountkitLogin(): void {
    AccountKit.login('PHONE', { countryCode: '+91', phoneNumber: '8870689114' }).then(
      (response: AuthResponse) => console.log(response),
      (error: any) => console.error(error)
    );
  }
  
  signInWithGoogle(): void {
      if(this.user == null){
          this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
       }
      this.subscribeToSocial();
  }

  signInWithFB(): void {
      this.logService.log("calling facebook::"+this.user);
      if(undefined == this.user || this.user == null){
          this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
      this.subscribeToSocial();
  }

  subscribeToSocial(){
      this.authService.authState.subscribe((user) => {
      this.user = user;
         if(this.user != null){
            this.logService.log("username for backend application"+user.email);
            this.userModel.userId=user.email;
            this.userModel.companyId="Lixo";
            this.userModel.systemId = "test";
            this.reqHeaderModel.channel="reservationweb";
            this.userModel.header=this.reqHeaderModel;
            this.restService.post(this.userModel,environment.retrieveprofile).subscribe(
                response =>{
                  this.logService.log(response.status.status_code);
                  if(response.status.status_code == 1001){
                    this.event.emit({data:this.userModel.userId});
                    this.logService.log(response);
                  }else{
                    this.logService.warn("Profile retrival failed");
                    this.logService.log("trying registration");
                    this.userModel.userSecret="11111111";
                    this.registerUser();
                  }
              });
          }else{
            this.logService.warn("Social User returned null");
          }
      });
  }

  populateUsermodel(user:SocialUser):UserModel{
      this.userModel = {} as UserModel;
      this.logService.log("populating user model"+this.userModel);
      this.userModel.userId = user.email;
      return this.userModel;
  }

  onSubmit() {
      this.logService.log("Login form Valid"+this.loginForm.valid);
      if (this.loginForm.valid) {
        
          this.logService.log("Form Submitted!");
          this.userModel.userId  = this.loginForm.value.email;
          this.userModel.userSecret = this.loginForm.value.password;
          this.userModel.companyId="Lixo";
          this.userModel.systemId = "test";
          this.reqHeaderModel.channel="reservationweb";
          this.userModel.header=this.reqHeaderModel;
          //this.callingApi = true;
          this.logService.log("Before calling Api" +this.callingApi);
          this.logService.log("Switching if register or not"+ this.swithtoRegister);
          if(this.swithtoRegister){
              this.registerUser();
          }else{
              this.restService.post(this.userModel,environment.login).subscribe(
              response =>{
                    console.log(response.status.status_code);
                    if(response.status.status_code == 1001){
                     this.event.emit({data:this.userModel.userId});
                    }else{
                      this.logService.warn("Authentication Failure Occured");
                      console.warn("Authentication Failure Occured");
                      this.authFail = true;
                      this.errorMsg = appmessage.login.authenticationfailure;
                    }
              });
              //this.callingApi = false;
              this.logService.log("After calling Api" +this.callingApi);
              this.logService.log("calling reset");
              this.loginForm.reset();
          }
      }
  }
  registerUser(){
        this.restService.post(this.userModel,environment.register).subscribe(
            response =>{
                  this.logService.log(response.status.status_code);
                  if(response.status.status_code == 1001){
                        this.event.emit({data:this.userModel.userId});
                        this.logService.log(response);
                  }else{ 
                       this.logService.log("registration failed");
                       this.authFail = true;
                       this.errorMsg = appmessage.login.registrationfailure;
                       this.logService.log(this.errorMsg);
                  }
            });
  }
  
  switchLoginRegister(){
    this.logService.log("switching to register or login"+ this.swithtoRegister);
     if(this.swithtoRegister == false){
       this.swithtoRegister = true;
     } else{
       this.swithtoRegister = false;
     }  
    this.logService.log("switching to register or login"+ this.swithtoRegister);
  }

  toggleShowPassword(){
    this.logService.log("current show password:"+this.showPassword);
    if(this.showPassword==false){
      this.showPassword=true;
    }else{
      this.showPassword=false;
    }
    this.logService.log("current show password:"+this.showPassword);
  }
 
 }
