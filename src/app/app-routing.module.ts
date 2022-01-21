import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateLoginGuard } from './auth/guards/validate-login.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },{
    path:'dashboard',
    loadChildren:()=> import('./protected/protected.module').then(m=>m.ProtectedModule),
    canActivate:[ValidateLoginGuard],
    canLoad:[ValidateLoginGuard]
  },{
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
