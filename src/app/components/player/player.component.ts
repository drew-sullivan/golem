import { Component, OnInit } from '@angular/core';

import { GOLEM } from './../../../assets/golem';
import { Card } from './../../models/card';

import { CardService } from '../../services/card.service';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  game = GOLEM;
  hand: Card[] = [];
  discardPile: Card[] = [];

  constructor(public cardService: CardService, public gameService: GameService) {
    const tempStartingCards = this.game['cards']['merchant']['starting'];
    const startingCards = tempStartingCards.map(obj => this.cardService.castToCard(obj));
    startingCards.forEach(card => this.hand.push(card));
  }

  ngOnInit() {
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
    this.hand.forEach(card => console.log(card));
  }
}
