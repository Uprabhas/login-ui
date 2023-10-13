import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIserviceService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { NavComponent } from 'src/app/nav/nav.component';
import { timeInterval, timeout } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resdata:any

  isLogin:any = false;
  constructor(private api:APIserviceService,private apps:AppService,private router:Router,private toastr: ToastrService){}
  ngOnInit(): void {
    this.apps.getlogout.subscribe(msg=>this.isLogin=msg)
  }

  signup=new FormGroup({
    // username:new FormControl(''),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  login=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  Onsignup(event:any) {
    // console.log(this.signup.value);
    event.preventDefault();
    this.api.getergisterdata(this.signup.value).subscribe(
      (res:any) =>{
        this.resdata = res
       localStorage.setItem('token',res.token)
      let auth =  localStorage.getItem('token')
        if (auth) {
          this.toastr.success("successfully register");
          this.router.navigateByUrl('userlist');
        } 
      },(err)=>{this.toastr.error("error:wrong credentials")}
    )
    //   this.toastr.success("successfully register") },
    // (err)=>{console.log(err),this.toastr.error("error:Missing password") }
    
  }
  Onlogin(event:any){
    event.preventDefault();
    // console.log(this.login.value)
    this.api.getlogindata(this.login.value).subscribe((res:any)=>{
      this.resdata=res
      localStorage.setItem('token',res.token)
      let auth= localStorage.getItem('token')
      if(auth){
        this.toastr.success("successfully login");
          this.router.navigateByUrl('userlist');
        } 
      },(err)=>{this.toastr.error("error:wrong credentials")}
    )
    }
    showToaster(){  
      this.toastr.error("error:Missing password")  
  }  

  logi():void{    
    this.apps.setlogin(this.isLogin)
  }
  

 
}
