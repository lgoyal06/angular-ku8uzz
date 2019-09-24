import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-serach',
  templateUrl: './hero-serach.component.html',
  styleUrls: ['./hero-serach.component.css']
})
export class HeroSerachComponent implements OnInit {

  searchList:Observable<Object>
  constructor(private heroesService: HeroesService,) { }

  ngOnInit() {
  }
//https://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject good link 
  onchange(){
    this.heroesService.getHeroes().subscribe(searchList=>this.searchList = searchList)
  }

}