import { Component, OnInit } from '@angular/core';
import { LogMessageService } from './log-message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  constructor(private logMessageService:LogMessageService) { }
  messages: string[]
  ngOnInit() {
    this.messages = this.logMessageService.fetchlogs()
  }
}
