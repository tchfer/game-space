import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app.routes';
import { GameService } from './core/services/game.service';
import { GameEffects } from './store/effects/game.effects';
import { gameReducer } from './store/reducers/game.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ gameState: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [GameService],
  bootstrap: []
})
export class AppModule {}
