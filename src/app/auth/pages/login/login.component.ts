import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService) { }
  
  login(event: Event){
    event.preventDefault();
    const { email, password } = this.loginForm.value;
    this.userService.login(email,password).subscribe(resp=>{
     
      if ( resp.ok=== true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Error', resp.msg, 'error');
      }
    })


  }

 

}
