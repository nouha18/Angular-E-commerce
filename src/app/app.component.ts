import { Component } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  title = 'ecommercesite';
  constructor() { }

  ngOnInit(): void {
  }

  gologin(){
    Swal.fire({
      title: 'Please, login First',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}

