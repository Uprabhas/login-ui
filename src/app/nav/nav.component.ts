import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logi: boolean = true;
  isLoggedIn: any = false;


  constructor(private router: Router, private apps:AppService  ) {
  //  this.apps.getlogout.subscribe(msg=>this.isLoggedIn=msg);

  }

  ngOnInit(): void {
    this.apps.getlogout.subscribe(msg=>this.isLoggedIn=msg);
    let token = localStorage.getItem('token')
    // console.log(token);
   if(token==null){
    this.isLoggedIn=false
    this.logi=true
   }
   else{
    this.isLoggedIn=true 
    this.logi=false;}

  }

  login() {
    // this.router.navigateByUrl('')  
  }

  logout() {
    localStorage.removeItem('token')
    this.isLoggedIn = true
    this.router.navigateByUrl('')
    this.apps.setlogin(this.isLoggedIn)

  }

}
