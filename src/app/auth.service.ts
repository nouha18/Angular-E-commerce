import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:3001/api/v2.5';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  cookieValue:string="";
  currentUser: User={  _id:'',
    nom: '',
    prenom:'',
    email: '',
    phone:'',
    password: ''};
  constructor(private http: HttpClient,private cooService:CookieService, public router: Router) { }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/adduser`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/auth`, user)
      .subscribe((res: any) => {
          localStorage.setItem('access_token', res.data.accesstoken);
          this.cooService.set('cookie-token',res.data.accesstoken);
          this.cookieValue= this.cooService.get('cookie-token');
          console.log(this.cookieValue);
          alert(res.message);
          console.log(res);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res.msg;
          console.log('id of user ',res);

          localStorage.setItem('iduser', res.msg._id);
          this.router.navigate(['profile/' + res.msg._id]);
        });

      });
  }

  getId() {
    if(localStorage.getItem('access_token')!== null){
      return this.currentUser ;
    }
    return;
  }
  getToken() {
    if(localStorage.getItem('access_token')!== null){
      return localStorage.getItem('access_token');
    }
    return;
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  get isLoggedOut(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }



  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
