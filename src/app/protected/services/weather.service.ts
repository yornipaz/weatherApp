import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiResponse } from 'src/app/auth/interfaces/api-response';
import { environment } from 'src/environments/environment';
import { ApiWeather } from '../interfaces/apiweather';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _searches: Search[];
  private baseUrl: string = environment.baseUrls.openweather;
 

  constructor(private http: HttpClient) {
    this._searches = [];
  }
  get searches(): Search[] {
    return this._searches;
  }

  addSearch(city:string) {
    const search:Search={
      city,
      hour:this.hourFormatted,
      date:this.dateFormatted
    }
    this._searches.push(search);
  }
  deleteSearch() {
    this._searches = [];
  }
  get hourFormatted(): string {
    return new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }
  get dateFormatted(): string {
    return new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',

    });
  }
  weatherCity(city: string): Observable<ApiWeather> {
    const url: string = `${this.baseUrl}?q=${city}&appid=${environment.apiKey}`;

    return this.http.get<ApiWeather>(url)  }
}
