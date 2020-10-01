// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {HeroesComponent} from './components/heroes/heroes.component'
import {HeroeComponent} from './components/heroe/heroe.component'
import {HeroeFiltradoComponent} from './components/heroe-filtrado/heroe-filtrado.component'


const APP_ROUTES: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'heroe/:id', component:HeroeComponent},
  {path:'heroeFiltrado/:term', component:HeroeFiltradoComponent},

  // {path:'heroes', component:HeroesComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home' }
]; 

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true}) 
