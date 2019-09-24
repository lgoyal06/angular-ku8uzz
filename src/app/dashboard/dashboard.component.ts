import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
items$:Observable<Object>

x:number
  constructor(private heroesService: HeroesService,) { 
   
  }

  ngOnInit() {
     this.heroesService.getHeroes()
      .subscribe(items$ => this.items$ = items$.slice(0, 5));
      const numbers = interval(1000); 
      const takeFourNumbers = numbers.pipe(take(3));
      takeFourNumbers.subscribe(x =>this.x= x);
  }

  

}