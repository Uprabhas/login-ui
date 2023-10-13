import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { UserlistComponent } from './userlist/userlist.component'; 
import { ToastrModule } from 'ngx-toastr';
import { UserdetailComponent } from './userdetail/userdetail.component';  


@NgModule({
  declarations: [
    LoginComponent,
    ForgotpassComponent,
    UserlistComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    
  ]
})
export class AuthModule { }
