import { Component, OnInit } from '@angular/core';
import { APIserviceService } from 'src/app/services/apiservice.service';
import { UserlistComponent } from '../userlist/userlist.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{
  detail:any
  id:any
  

  constructor(private api:APIserviceService,private router:Router,private activated:ActivatedRoute){}
  ngOnInit(): void {
    this.id= this.activated.snapshot.paramMap.get('id');
    console.log(this.id)
    this.getdetail()
  
  }

  

  
  getdetail(){
    this.api.getuserdetail(this.id).subscribe((res:any)=>{
      this.detail=res.data,console.log(this.detail)},(err)=>{console.log(err)})
     
  }
  // back()[
  //   this.router.navigateByUrl('/user')
  // ]

}
