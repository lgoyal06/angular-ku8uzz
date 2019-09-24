import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, } from 'rxjs';
import { concatMap, map, merge, switchMap, tap, delay, skip } from 'rxjs/operators';

import { LogMessageService } from './log-message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient, private logMessageService:LogMessageService) {
    
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
    return this.http.get('/assets/heroes.json').pipe(
       tap(_ => this.logMessageService.addLogs('fetched all heroes lists'))
    )
  }

  getHeroById(i:number) {
     this.logMessageService.addLogs('Get heroe by id'+i)
    return this.items.filter(items=>items.id === i)[0]
  }
  
   updateHeroById(itemToUpdate:object) {
     this.items.filter(items=>items.id === itemToUpdate.id)[0].name = itemToUpdate.name;
     this.logMessageService.addLogs('Update hero by id'+itemToUpdate.id)
  }
}