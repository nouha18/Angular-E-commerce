import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {MailersService} from "../service/mailers.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
mailform : FormGroup;
  constructor(private formBuilder : FormBuilder, private mailerService: MailersService) { }
  get f() { return this.mailform.controls; }

  ngOnInit(): void {
 this.mailform = this.formBuilder.group({
   username: ['', Validators.required],
   email: ['', Validators.required],
   subject: ['', Validators.required],
   message : ['', Validators.required],
 })
  }

sendEmail() {
  let msg = "from this person "+this.mailform.value.username+","+this.mailform.value.message;
  let formdata = new FormData();
  console.log('email :',msg);
  formdata.append("username",  this.mailform.value.email);
  formdata.append("email",  this.mailform.value.email);
  formdata.append("subject", this.mailform.value.subject);
  formdata.append("message", msg);
  console.log('login data', this.mailform.value);
  if (this.mailform.invalid) {
    return;
  }
  this.mailerService.sendmessage(this.mailform.value).subscribe(resp =>{
  console.log('email sent successfully'+resp);
  });
}
}
