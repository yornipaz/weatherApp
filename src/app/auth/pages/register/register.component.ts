import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  registerForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });

  constructor(private fb:FormBuilder, private router:Router,private userService:UserService ) { }
  register(event: Event){
    event.preventDefault();
    const {name ,email, password } = this.registerForm.value;
    this.userService.register(name,password,email).subscribe(resp=>{
     
      if ( resp.ok=== true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Error', resp.msg, 'error');
      }
    })
  }

}
