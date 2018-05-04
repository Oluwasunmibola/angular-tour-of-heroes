import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {AppModule} from './app.module';
import { NgModel } from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


 const routes: Routes =[
    {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
    
 ];
  NgModule({
     exports: [RouterModule]
 })

 export const appRouting = RouterModule.forRoot(routes);
