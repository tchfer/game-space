// src/app/pages/game-details/game-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, BoxDimensions } from '../../../../core/models/game.model';
import { GameService } from '../../../../core/services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-details',
  standalone: true,
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  imports: [CommonModule]
})
export class GameDetailsComponent implements OnInit {

  game: Game | undefined;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.game = games.find(g => g.id === gameId);
    });
  }

  formatBoxDimensions(dimensions?: BoxDimensions): string {
    return dimensions ? `${dimensions.height}x${dimensions.width}x${dimensions.fullLength}` : 'N/A';
  }
}
