import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  registerForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(8)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });

  constructor(private fb:FormBuilder) { }
  register(event: Event){
    event.preventDefault();
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid)
  }

}
