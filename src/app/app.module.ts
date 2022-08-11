import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './account/welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account/account.component';
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProdnewsComponent } from './prodnews/prodnews.component';
import { ContactComponent } from './contact/contact.component';
import {MailersService} from "./service/mailers.service";
import { HttpClientModule,HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    WishlistComponent,
    NotFoundComponent,
    ProdnewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,ReactiveFormsModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MailersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
