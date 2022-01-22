import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HistoryComponent } from './pages/history/history.component';
import { SearchComponent } from './pages/search/search.component';
import { TableHistoryComponent } from './components/table-history/table-history.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';
import { MaterialModule } from './shared/material/material.module';
import {  HttpClientModule } from '@angular/common/http';
import { ErroComponent } from './components/erro/erro.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    SearchComponent,
    TableHistoryComponent,
    InputSearchComponent,
    CardWeatherComponent,
    ErroComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    HttpClientModule

    
    
  ]
})
export class ProtectedModule { }
