import { createAction, props } from '@ngrx/store';
import { Game } from '../../core/models/game.model';

export const addGame = createAction(
  '[Game] Add Game',
  props<{ game: Game }>()
);

export const loadGames = createAction(
  '[Game] Load Games'
);

export const loadGamesSuccess = createAction(
  '[Game] Load Games Success',
  props<{ games: Game[] }>()
);

export const deleteGame = createAction(
  '[Game] Delete Game',
  props<{ gameId: number }>()
);
export function loadGamesFailure(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}

