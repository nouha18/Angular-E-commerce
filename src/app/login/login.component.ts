import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthService } from '../auth.service';

import {Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typeSelected: string='ball-fussion';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  //value = 'https://www.techiediaries.com/';
  value='http://localhost:3000/api/2.5/showuser';
  loginForm: FormGroup;
  constructor(private authService : AuthService, private formBuilder : FormBuilder,private spinnerService: NgxSpinnerService,private  httpClient: HttpClient,private router : Router) {
    this.typeSelected = 'pacman';
    // this.loginForm = this.formBuilder.group({
    //   email : ['',Validators.required],
    //   password :['',Validators.required]
    //   })

  this.loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

});
   }

  ngOnInit(): void {
  }
  public showSpinner(): void {
    if(this.loginForm){
    this.spinnerService.show();
    }
    setTimeout(() => {
      this.spinnerService.hide();
      this.router.navigate(['/'])
    }, 5000); // 5 seconds
  }
  login(): void {
    //this.httpClient.post('http://localhost:3000/api/2.5/auth',this.loginForm.value,{withCredentials:true}).subscribe(() => this.showSpinner())
    this.showSpinner()

  }
  loginUser() {
    this.authService.signIn(this.loginForm.value);
    this.showSpinner()
  }
}
