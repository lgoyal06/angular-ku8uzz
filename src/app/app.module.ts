import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailEditComponent } from './hero-detail-edit/hero-detail-edit.component';
import { HeroesService } from './heroes.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,HttpClientModule,
  RouterModule.forRoot([
    {path:'', component : DashboardComponent},
    {path:'dashboard', component : DashboardComponent},
    {path:'heroes', component : HeroesComponent},
    {path:'editDetails/:heroId', component : HeroDetailEditComponent},
    {path:'viewDetails/:heroId', component : HeroDetailComponent},
    ]) ],
  declarations: [ AppComponent, TopBarComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroDetailEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService]
})
export class AppModule { }
