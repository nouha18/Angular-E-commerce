import { Component, OnInit,Renderer2  } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  `]
})
export class HomeComponent implements OnInit {
message: string = "your 're logged in!"
  page = 4;
    page1 = 5;
    focus:any;
    focus1:any;
    focus2:any;
    model: Date = new Date();
    isLoggedIn=false;
    constructor( private renderer : Renderer2,private http: HttpClient) {}


    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;

    }



  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v2.5/showuser',{withCredentials:true}).subscribe(
      (res:any)=> {console.log(res);
      this.message = `Salut ${res.email}`;
      Emitters.authEmitter.emit(true);
    },
      err =>{console.log(err);
      Emitters.authEmitter.emit(false);
      this.message = err}
    );

    console.log("log condition",localStorage.getItem('loggedIn'))
    if(localStorage.getItem('loggedIn')=='true'){
        this.isLoggedIn=true;
    }
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
        input_group[i].children[0].addEventListener('focus', function (){
            input_group[i].classList.add('input-group-focus');
        });
        input_group[i].children[0].addEventListener('blur', function (){
            input_group[i].classList.remove('input-group-focus');
        });
    }
  }


}
