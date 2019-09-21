import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
viewForm;
hero;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private heroesService: HeroesService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.hero = this.heroesService.getHeroById(parseInt(params.get('heroId')));
          this.viewForm = this.formBuilder.group({
            id: [this.hero.id],
            name: [this.hero.name],
    });
  });
  }

}