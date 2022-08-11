import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./account/register/register.component";
import {LoginComponent} from "./account/login/login.component";
import {WelcomeComponent} from "./account/welcome/welcome.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AccountComponent} from "./account/account/account.component";
import {WishlistComponent} from "./account/wishlist/wishlist.component";
import {AppComponent} from "./app.component";
import {ProdnewsComponent} from "./prodnews/prodnews.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [{path: '', component: ProdnewsComponent},{path: 'contact', component: ContactComponent},{path: 'register', component: RegisterComponent},{path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent,children : [{path: 'account', component: AccountComponent},
      {path: 'wishlist', component: WishlistComponent}]},
      {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
