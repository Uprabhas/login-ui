import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { SerComponent } from './ser/ser.component';
import { ContactComponent } from './contact/contact.component';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { DefaultpageComponent } from './auth/defaultpage/defaultpage.component';

const routes: Routes = [
  {
    path:'home',component : HomeComponent
  },
  {
    path:'contact',component:ContactComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
