import {Component, OnInit} from '@angular/core';
import {Hero, Heroes} from '../models/hero.model';
import {HeroService} from "../services/hero.service";



@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes;
  selectedHero: Hero;



  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe(value => this.heroes = value);
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }


}
