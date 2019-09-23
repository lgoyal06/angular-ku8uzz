import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) {
    
   }
  
  getHeroes():Observable<Object> {
    return this.http.get('/assets/heroes.json');
  }

  getTopHeroes():Observable<Object> {
    //return this.items.filter(items=>items.id < 5)
    return this.http.get('/assets/heroes.json');
  }

  getHeroById(i:number):Observable<Array<Object>>  {
    
    var obj= this.http.get('/assets/heroes.json')
    return obj.filter(items=>items.id === i)[0];
  }
  
   updateHeroById(itemToUpdate:object) {
     console.log("Hello");
     this.items.filter(items=>items.id === itemToUpdate.id)[0].name = itemToUpdate.name;
  }
}