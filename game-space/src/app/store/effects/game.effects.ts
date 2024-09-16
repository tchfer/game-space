import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GameActions from '../actions/game.actions';
import { GameService } from '../../core/services/game.service';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameService: GameService // Aqui injetamos o GameService
  ) {}

  // Efeito para carregar os jogos
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGames), // Quando a action 'loadGames' for disparada
      mergeMap(() =>
        this.gameService.getGames().pipe(
          map((games) => GameActions.loadGamesSuccess({ games })), // Retorna os jogos com sucesso
          catchError((error) => of(GameActions.loadGamesFailure({ error }))) // Em caso de erro
        )
      )
    )
  );
}
