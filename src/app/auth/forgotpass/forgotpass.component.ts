import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

  forgotpass= new FormGroup({
      email:new FormControl('',Validators.required)
  })
  forgot(){
    console.log(this.forgotpass.value);
  }


}
