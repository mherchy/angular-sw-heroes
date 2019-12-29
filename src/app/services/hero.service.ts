import { Injectable } from '@angular/core';
import {Heroes} from "../models/hero.model";

import {HEROES} from "../mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    public messageService: MessageService
  ) { }

  getHeroes(): Observable<Heroes> {
    let h = HEROES;
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
