import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  searchForm:FormGroup=this.fb.group({
   
    city:['',[Validators.required,Validators.minLength(3)]]
  });

  constructor(private fb:FormBuilder) { 
 
  }

  ngOnInit(): void {
  }
  onSearch(event:Event){
    event.preventDefault()
   

    

  }


}
