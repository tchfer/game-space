import { Component, OnInit } from '@angular/core';
import { Game } from '../../../core/models/game.model';
import { GameService } from '../../../core/services/game.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  standalone: true,
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  imports: [CommonModule]
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data: Game[]) => {
      this.games = data;
    });
  }

  formatBoxDimensions(dimensions: { height: number; width: number; fullLength: number }): string {
    return `${dimensions.height} x ${dimensions.width} x ${dimensions.fullLength}`;
  }

  goToDetails(gameId: number): void {
    this.router.navigate(['/game-details', gameId]);
  }
}
