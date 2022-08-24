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
  endpoint: string = 'https://data.mongodb-api.com/app/data-ulcym/endpoint/data/v1/action';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set("Access-Control-Request-Headers",'*')
  .set('auth-key',"62ab9190127917218f56b820")
  .set('Accept',"application/json");
  cookieValue:string="";
  currentUser: User={  _id:'',
    nom: '',
    prenom:'',
    email: '',
    phone:'',
    password: ''};
    //Maurice15@gmail.com

    //Maurice125
  constructor(private http: HttpClient,private cooService:CookieService, public router: Router) { }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/insertOne`;
    return this.http.post(api, {dataSource: "ClusterReact",database: "nodejsApi",collection: "nodejsApi",document:user}).pipe(catchError(this.handleError));
  }

  signIn(user: User) {
    return this.http
      .post<User>(`${this.endpoint}/findOne`, {dataSource: "ClusterReact",database: "nodejsApi",collection: "nodejsApi", filter: { "email": user.email}})
      .subscribe((res: any) => {
        console.log(res.document._id);
          localStorage.setItem('access_token', res.document.email);
          this.cooService.set('cookie-token',res.document.email);
          this.cooService.set('cookie-id',res.document._id);
          this.cookieValue= this.cooService.get('cookie-token');
          alert("welcome Dear: "+res.document.nom);
          this.router.navigate(['/' +  this.currentUser._id]);

          console.log(JSON.stringify(res.document));
        this.getUserProfile(res.document._id).subscribe((res) => {
          this.currentUser = res.document;
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
    console.log(api);
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
