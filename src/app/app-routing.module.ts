import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { AuthGuard } from "./auth.guard";
const routes: Routes = [

  {path:'dashs', component:HomeComponent},
  {path:'*', redirectTo: '/login', },
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'profile/:id',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'',component:FrontComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
