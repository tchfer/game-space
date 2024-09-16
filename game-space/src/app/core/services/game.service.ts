import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private games: Game[] = [];

  constructor() {}

  getGames(): Observable<Game[]> {
    const games: Game[] = [
      {
        id: 1,
        name: 'Munchkin',
        price: 59.99,
        boxDimensions: { height: 10, width: 15, fullLength: 20 },
        description: 'RPG',
        image: '/assets/images/test.png'
      },
      {
        id: 2,
        name: 'Munchkin',
        price: 59.99,
        boxDimensions: { height: 10, width: 15, fullLength: 20 },
        description: 'RPG',
        image: '/assets/images/munchkin.jpeg'
      }
    ];

    return of(games);
  }

}
