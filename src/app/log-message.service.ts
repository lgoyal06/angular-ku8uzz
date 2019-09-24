import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';

@Injectable()
export class LogMessageService {

  constructor() { }
  logMessage: string[] = []

  addLogs(currentLog:string) {
   this.logMessage.push(currentLog)
  }
  fetchlogs(){
    console.log(this.logMessage)
    return this.logMessage
  }

}