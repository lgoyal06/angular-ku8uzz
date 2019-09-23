import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 items=[];
 selectedId;
 selectedName;

  constructor(private heroesService: HeroesService,) { 
    
  }

onSelect(item){
  this.selectedId = item.id;
  this.selectedName = item.name;

}
  ngOnInit() {
    this.heroesService.getHeroes().subscribe(items => this.items = items);
  }

}