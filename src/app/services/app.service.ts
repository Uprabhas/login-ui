import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private login = new BehaviorSubject('login');
  getlogout = this.login.asObservable();

  constructor() { }
   
  setlogin(login:any){
    this.login.next(login )
  }
}
