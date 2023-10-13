import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AuthGuard } from '../services/authguard.guard';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'forgotpass',component:ForgotpassComponent,canActivate:[AuthGuard]
  },
  {
    path:'userlist',component:UserlistComponent,canActivate:[AuthGuard]
  },
  {
    path:'userdetail/:id',component:UserdetailComponent,canActivate:[AuthGuard]
  },
  {
    path:'default',component:DefaultpageComponent
  },
  {
    path:'**',redirectTo:"/default" ,pathMatch :"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
