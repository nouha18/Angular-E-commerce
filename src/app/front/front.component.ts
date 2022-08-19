import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  isLoggedIn:boolean= false;
  cookieValue: string ="";
  tokens: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmNiYzMyNDUwNzc4NzJhM2JhMDI0ZCIsImlhdCI6MTY2MDczMTQ0NiwiZXhwIjoxNjYwODE3ODQ2fQ.xPfaoBrZ_eDXiximLB8dptCuvhotGE-djzO4ZlMGenk';
  userId: string = '';
  constructor(public authService: AuthService,private cooService: CookieService) {
  }

  logout() {
    this.authService.doLogout()
    this.isLoggedIn=false;

  }
  ngOnInit(): void {
    this.cooService.set('cookie','set Cookies test');
    this.cookieValue= this.cooService.get('cookie');
    console.log(this.cookieValue);

    if(this.authService.getToken())
    {this.isLoggedIn=true;
      console.log('user logged',this.cooService.get('cookie-token'))
   }

  }

}
