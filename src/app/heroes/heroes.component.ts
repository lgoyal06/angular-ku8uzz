import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 items;
  constructor(private heroesService: HeroesService,) { 
    this.items = this.heroesService.getHeroes();
  }

  ngOnInit() {
  }

}