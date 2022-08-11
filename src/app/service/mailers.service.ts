import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailersService {

  constructor(private http : HttpClient) { }
  sendmessage(body){
    return this.http.post('http://localhost:8080/sendMail',body);
  }
}
