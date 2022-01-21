import { Injectable } from '@angular/core';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _searches:Search[];

  constructor() { 
    this._searches=[];
  }
  get searches():Search[]{
    return this._searches;
  }
  addSearch(search:Search){
    this._searches.push(search);
  }
  deleteSearch(){
    this._searches=[];
  }

}
