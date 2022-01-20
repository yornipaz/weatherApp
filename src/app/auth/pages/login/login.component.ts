import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm:FormGroup=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });

  constructor(private fb:FormBuilder) { }
  login(event: Event){
    event.preventDefault();
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid)
  }

 

}
