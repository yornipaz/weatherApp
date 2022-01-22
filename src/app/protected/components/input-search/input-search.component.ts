import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiWeather } from '../../interfaces/apiweather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Output() dataApiWeather= new EventEmitter<ApiWeather>();
  searchForm:FormGroup=this.fb.group({
   
    city:['',[Validators.required,Validators.minLength(3)]]
  });

  constructor(private fb:FormBuilder,private weatherService:WeatherService) { 
 
  }

  ngOnInit(): void {
  }
  onSearch(event:Event){
    event.preventDefault()
    const city:string=this.searchForm.value.city;
    this.weatherService.addSearch(city);
    this.weatherService.weatherCity(city).subscribe(resp=>{
      this.dataApiWeather.emit(resp);
      this.searchForm.reset()
      

    })
   

    

  }


}
