import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
viewForm;
  constructor(private formBuilder: FormBuilder,) {
    this.viewForm = this.formBuilder.group({
      id: 1,
      name: 'Test'
 });
   }

  ngOnInit() {
  }

}