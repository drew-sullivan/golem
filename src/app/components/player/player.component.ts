import { Component, OnInit } from '@angular/core';

import { GOLEM } from './../../../assets/golem';
import { Card } from './../../models/card';
import { Player } from '../../models/player';

import { CardService } from '../../services/card.service';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  game = GOLEM;
  activePlayer: Player = this.gameService.activePlayer;

  constructor(public cardService: CardService, public gameService: GameService) {
    this.gameService.activePlayerChange.subscribe(value => this.activePlayer = value);
  }

  ngOnInit() {
    // console.log(this.activePlayer.printInfo());
  }

  public playCard(card): void {
    // TODO: multiples
    if (card.multiplesAllowed) {
      return;
    } else {
      return;
    }
  }

  public endTurn(): void {
    this.gameService.endTurn();
  }

  public show(): void {
    this.activePlayer.hand.forEach(card => console.log(card));
  }
}
