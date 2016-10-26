import { Component, OnInit } from '@angular/core';

// Models
import { Hero } from '../../models/hero';

// providers
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroDetailComponent, HeroService]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; // Creates a public variable of Heroes const array

  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  // Get all heroes from HeroService
  getHeroes(): Hero[] {
    return this._heroService.getHeroes();
  }

}
