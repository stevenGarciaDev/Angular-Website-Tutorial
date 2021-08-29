import { Injectable } from '@angular/core';
import { Hero } from '../../shared/interfaces/hero';
import { HEROES } from '../../shared/mock-heroes';

import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
