import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
authenticated : boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe((auth:boolean) =>{
      this.authenticated = auth;
    })
  }
  logout():void{
 this.http.post('',{},{withCredentials:true}).subscribe(()=>{
this.authenticated= false;
 });
  }

}
