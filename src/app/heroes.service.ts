import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, } from 'rxjs';
import { concatMap, map, merge, switchMap, tap, delay, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) {
    
   }

items=[
  {
    "name": "Narco1",
    "id": 1
  },
  {
    "name": "Bom1basto",
    "id": 2
  },
  {
    "name": "Celweritas",
    "id": 3
  },
  {
    "name": "Magneta",
    "id": 4
  }
]
  
  getHeroes():Observable<Object> {
    return this.http.get('/assets/heroes.json')
  }

  getTopHeroes():Observable<Object> {
    //return this.items.filter(items=>items.id < 5)
    return this.http.get('/assets/heroes.json');
  }

  getHeroById(i:number) {
    return this.items.filter(items=>items.id === i)[0];
  }
  
   updateHeroById(itemToUpdate:object) {
     console.log("Hello");
     this.items.filter(items=>items.id === itemToUpdate.id)[0].name = itemToUpdate.name;
  }
}