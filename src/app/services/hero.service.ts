import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { Heroes } from '../models/heroes';

@Injectable()
export class HeroService {

  heroes = Heroes;

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
