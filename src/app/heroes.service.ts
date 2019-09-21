import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) {
    
   }
items = [{
    name: 'Narco',
   id:1
  },
 {
    name: 'Bombasto',
   id:2
  },
 {
    name: 'Celeritas',
   id:3
  },
  {
    name: 'Magneta',
   id:4
  },
  {
    name: 'Magneta1',
   id:6
  },
  {
    name: 'Magneta2',
   id:7
  }
  ];

  
  getHeroes() {
    return this.items;
  }

  getTopHeroes() {
    return this.items.filter(items=>items.id < 5)
  }

  getHeroById(i:number) {
    return this.items.filter(items=>items.id === i)[0];
  }
  
   updateHeroById(itemToUpdate:object) {
     console.log("Hello");
     this.items.filter(items=>items.id === itemToUpdate.id)[0].name = itemToUpdate.name;
  }
}