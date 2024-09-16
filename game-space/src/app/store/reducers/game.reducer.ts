import { createReducer, on } from '@ngrx/store';
import { addGame, loadGamesSuccess, deleteGame } from '../actions/game.actions';
import { Game } from '../../core/models/game.model';

export interface GameState {
  games: Game[];
}

const initialState: GameState = {
  games: []
};

export const gameReducer = createReducer(
  initialState,

  on(addGame, (state, { game }) => ({
    ...state,
    games: [...state.games, game]
  })),

  on(loadGamesSuccess, (state, { games }) => ({
    ...state,
    games: games
  })),

  on(deleteGame, (state, { gameId }) => ({
    ...state,
    games: state.games.filter(game => game.id !== gameId)
  }))
);
