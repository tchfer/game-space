import { GameDetailsComponent } from './presentation/pages/game-details/game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './presentation/organisms/game-list/game-list.component';

 export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameListComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: '**', redirectTo: '/games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
