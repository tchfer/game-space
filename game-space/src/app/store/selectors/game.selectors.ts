import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameState } from '../reducers/game.reducer';

// Seleciona o estado do jogo
export const selectGameState = createFeatureSelector<GameState>('gameState');

// Seleciona todos os jogos do estado
export const selectAllGames = createSelector(
  selectGameState,
  (state: GameState) => state.games
);
