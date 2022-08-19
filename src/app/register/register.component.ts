import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
//import { v4 as uuid } from 'uuid';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: ' oh oh!! Credential is required',
  },
];
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  submitted: boolean =false;
  constructor( public authService: AuthService, private formbd : FormBuilder,private  httpClient: HttpClient,private router : Router) {
    this.signupForm = this.formbd.group({
      nom : ['', [Validators.required,Validators.minLength(5)]],
      prenom : ['', Validators.required],
      email : ['', Validators.required],
      phone : ['', Validators.required],
      password :['', Validators.required]
      })
   }
   //     url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]

   get m(){
    return this.signupForm.controls;
  }
  ngOnInit(): void {}


  registerUser() {


  // display form values on success
   this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
          this.router.navigate(['login']);
      }else{
        alert('Error Credential!! :-)\n\n');

        this.onReset();

      }
    });
  }
  onReset() {
    this.submitted = false;
    this.signupForm.reset();
}

  submit():void {
     this.httpClient.post('http://localhost:3000/api/v2.5/adduser',this.signupForm.value).subscribe(() => this.router.navigate(['/login']))
   console.log(this.signupForm.value)
   if(this.signupForm.value !== null){
     alert('data sent')
   }
     //const guest = { ...this.form.value, id: uuid() };
     //this.guestService.addGuest(guest);
     //this.form.reset();
    // this.router.navigate(["/guests"]);
  }

}
