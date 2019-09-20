import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
items;
  constructor(private heroesService: HeroesService,) { 
    this.items = this.heroesService.getTopHeroes();
  }

  ngOnInit() {
  }

}