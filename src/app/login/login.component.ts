import {Component, OnInit, ViewChild} from '@angular/core';
import {HelperService} from "../helper.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

import {AuthService} from "../auth.service";
import {ServerService} from "../server.service";
import {AppVariablesService} from "../appVariables.service";
import {CartisanUser} from "../Models";

const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showErrorMessage = false;
  helper_message = "";
  isLoginMode = true;
  activatedRouteSnapshot;

  constructor(private helperService:HelperService,
              private serverService:ServerService,
              public appVariable:AppVariablesService,
              private authService:AuthService,
              private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRouteSnapshot = activatedRoute.snapshot;
  }
  @ViewChild('f') form;

  showMessageForGivenTime(message:string, duration:number=3000){
    this.helper_message=message;
    this.showErrorMessage = true;
    setTimeout(()=>{this.showErrorMessage=false},duration);
  }

  changeMode(){
    this.isLoginMode=!this.isLoginMode;
    let tempURL = this.isLoginMode?"login":"signup";
    this.router.navigate([tempURL]);
  }
  onSubmit() {

    if(!this.form.valid){

      this.showMessageForGivenTime('Please fill all inputs correctly');
      return;
    }
    console.log(this.form);
    const user:CartisanUser = {userEmail:this.form.value.email,userPassword:this.form.value.password};
    this.serverService.login(user).subscribe(

      (value:{userNotFound:boolean,massage:string,token:string,user:CartisanUser}) =>{

        console.log('saved in local stogare',value);
        localStorage.setItem('token',value.token);
        localStorage.setItem('user_id',value.user._id);
        localStorage.setItem('userFullName',value.user.userFullName);
        localStorage.setItem('userRole',value.user.userRole);
        // this.router.navigateByUrl(this.global.previousSRPURL);
        this.router.navigate([this.appVariable.previousSRPURL]);

      },
      (error )=> {
        console.log(error);//TODO improve error.error
        this.showMessageForGivenTime(error.error.message);
      }
    );
  }

  ngOnInit() {
    this.isLoginMode = this.activatedRouteSnapshot.data.isLoginMode;
  }


}
