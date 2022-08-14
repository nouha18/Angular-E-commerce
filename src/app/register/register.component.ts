import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
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
  constructor( private formbd : FormBuilder,private  httpClient: HttpClient,private router : Router) {
    this.signupForm = this.formbd.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', Validators.required],
      phone : ['', Validators.required],
      password :['', Validators.required]
      })
   }

  ngOnInit(): void {

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
