import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class APIserviceService  {
 
  constructor(private http:HttpClient) { }
  getergisterdata(data:any){
    return this.http.post('https://reqres.in/api/register',data);
  }
  getlogindata(data:any){
    return this.http.post('https://reqres.in/api/login',data)
  }
  getuserlist(){
    return this.http.get('https://reqres.in/api/users?page=1')
  }
  getuserdetail(id:any){
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
  Isloggedin(){
    return !!localStorage.getItem('token')
  }

}
