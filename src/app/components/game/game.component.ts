import { Component, OnInit } from '@angular/core';

import { GameService } from './../../services/game.service';
import { GemService } from './../../services/gem.service';

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
	activePlayer: Player = this.gameService.activePlayer;

	constructor(private gameService: GameService, private gemService: GemService) {
		this.availableGolemCards = this.gameService.availableGolemCards;
		this.availableMerchantCards = this.gameService.availableMerchantCards;
		this.gameService.activePlayerChange.subscribe(value => this.activePlayer = value);
	}

	ngOnInit() {
	}

	public purchaseCard(card, cardType): void {
		if (cardType === 'merchant') {

		} else {
			console.log(this.activePlayer.gems);
			const cost = card.gemsIn;
			const gemsOnHand = this.activePlayer.gems;
			for (const gemType in cost) {
				if (gemsOnHand[gemType] < cost[gemType]) {
					console.log('Not enough dough for that one!');
					return;
				}
			}
			for (const gemType of cost) {
				this.activePlayer.gems[gemType] -= cost[gemType];
			}
		}
		console.log(this.activePlayer.gems);
	}
}
