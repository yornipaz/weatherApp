import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      
      {path:'search',component:SearchComponent},
      {path:'history',component:HistoryComponent},
     
      {path:'**',redirectTo:'search'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
