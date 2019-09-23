import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail-edit',
  templateUrl: 'hero-detail-edit.component.html',
  styleUrls: ['./hero-detail-edit.component.css']
})
export class HeroDetailEditComponent implements OnInit {
editForm;
hero;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private heroesService: HeroesService,) {
  
   }
saveit(){
  this.heroesService.updateHeroById(this.editForm.value)
}
  ngOnInit() {
     this.route.paramMap.subscribe(params => {
       alert(parseInt(params.get('heroId')))
        this.hero = this.heroesService.getHeroById(parseInt(params.get('heroId')));
        alert(this.hero.id);
          this.editForm = this.formBuilder.group({
            id: [this.hero.id],
            name: [this.hero.name, Validators.required],
    });
  });
  }

}