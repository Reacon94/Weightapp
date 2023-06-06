import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authguardGuard } from './authguard.guard';

const routes: Routes = [
{
  path: "", 
  component:HomeComponent, 
},
{
  path:"dashboard",
  component: DashboardComponent,
  //canActivate:[authguardGuard]
},
{
  path: "**",
  component: NotFoundComponent
}

]; 

  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
  })
  export class AppRoutingModule { }