import { Component, OnInit } from '@angular/core';

import { GOLEM } from './../../../assets/golem';
import { Card } from './../../models/card';

import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  game = GOLEM;
  cards: Card[] = [];

  constructor(public cardService: CardService) {
    const tempStartingCards = this.game['cards']['merchant']['starting'];
    const startingCards = tempStartingCards.map(obj => this.cardService.castToCard(obj));
    startingCards.forEach(card => this.cards.push(card));
  }

  ngOnInit() {
  }

  public playCard(card): void {
    if (card.multiplesAllowed) {
      return;
    }
  }

  public show(): void {
    this.cards.forEach(card => console.log(card));
  }
}
