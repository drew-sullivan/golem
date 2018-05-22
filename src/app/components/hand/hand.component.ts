import { Component, OnInit } from '@angular/core';

import { GOLEM } from './../../../assets/golem';
import { Card } from './../../models/card';

import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  game = GOLEM;
  cards: Card[] = [];

  constructor(public cardService: CardService) {
    const tempStartingCards = this.game['cards']['merchant']['starting'];
    const startingCards = tempStartingCards.map(obj => this.cardService.castToCard(obj));
    startingCards.forEach(card => this.cards.push(card));
  }

  ngOnInit() {
  }

  public show(): void {
    this.cards.forEach(card => console.log(card));
  }

}
