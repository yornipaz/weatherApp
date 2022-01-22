import { Component, OnInit } from '@angular/core';
import { ApiWeather } from '../../interfaces/apiweather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  dataWeather:ApiWeather;

  constructor(private weatherService:WeatherService) { 
    this.dataWeather={
      "coord": {
        "lon": -74.0817,
        "lat": 4.6097
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 292.88,
        "feels_like": 292.01,
        "temp_min": 292.88,
        "temp_max": 292.88,
        "pressure": 1025,
        "humidity": 42
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 240
    },
    "clouds": {
        "all": 75
    },
    "dt": 1642792665,
    "sys": {
        "type": 1,
        "id": 8582,
        "country": "CO",
        "sunrise": 1642763436,
        "sunset": 1642806260
    },
    "timezone": -18000,
    "id": 3688689,
    "name": "Bogota",
    "cod": 200
    }
  }
 

  ngOnInit(): void {
  }
  sendDateWeather(apiWeather:ApiWeather){
    this.dataWeather=apiWeather;

  }

}
