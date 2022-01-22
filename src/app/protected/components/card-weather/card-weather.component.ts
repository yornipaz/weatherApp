import { Component, Input, OnInit } from '@angular/core';
import { ApiWeather } from '../../interfaces/apiweather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss']
})
export class CardWeatherComponent  {
  @Input() dataWeather!:ApiWeather;
  constructor(private weatherService:WeatherService) {
  
   }




}
