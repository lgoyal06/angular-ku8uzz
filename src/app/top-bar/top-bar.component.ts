import { Component, OnInit } from '@angular/core';
import { LogMessageService } from '../log-message.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private logMessageService:LogMessageService) { }
  messages: string[]
  ngOnInit() {
    this.messages = this.logMessageService.fetchlogs()
  }

}