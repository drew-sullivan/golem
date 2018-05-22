import { Component, OnInit } from '@angular/core';

import { GameService } from './../../services/game.service';

import { Deck } from '../../models/deck';
import { Card } from '../../models/card';
import { Hand } from '../../models/hand';
import { Player } from '../../models/player';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	availableGolemCards: Card[] = [];
	availableMerchantCards: Card[] = [];
	activePlayer: Player;

	constructor(public gameService: GameService) {
		this.availableGolemCards = this.gameService.availableGolemCards;
		this.availableMerchantCards = this.gameService.availableMerchantCards;
		this.activePlayer = this.gameService.activePlayer;
	}

	ngOnInit() {
	}

	public purchaseCard(card, cardType): void {
		console.log(card, cardType);
	}
}
