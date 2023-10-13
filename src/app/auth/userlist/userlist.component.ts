import { Component, OnInit } from '@angular/core';
import { APIserviceService } from '../../services/apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userdata:any
  idno:any

  constructor(private http:HttpClient,private api:APIserviceService,private router:Router){}

  ngOnInit(): void {
    
    this.getlist()
  }

  
  getlist(){
    this.api.getuserlist().subscribe((res)=>{console.log(res),
    this.setdata(res)}
  ,(err)=>{
      console.log(err)
    })
  }

  setdata(data:any){
    this.userdata=data.data
    console.log(this.userdata)
  }

  id(id:any){
    console.log(id);
    this.api.getuserdetail(id)
    this.router.navigateByUrl('/userdetail/'+id)
    
  }
}
