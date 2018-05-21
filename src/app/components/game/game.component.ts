import { Component, OnInit } from '@angular/core';

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

	golemDeck = new Deck('golem');
	merchantDeck = new Deck('merchant');
	availableGolemCards: Card[];
	availableMerchantCards: Card[];
	players: Player[] = [];

	constructor() { }

	ngOnInit() {
		this.startGame();
	}

	public startGame(): void {
		this.golemDeck.shuffleDeck();
		this.merchantDeck.shuffleDeck();
		this.availableGolemCards = this.golemDeck.cards.slice(0, 5);
		this.availableMerchantCards = this.merchantDeck.cards.slice(0, 6);
		const drew = new Player('Drew');
		const rebecca = new Player('Rebecca');
		this.players.push(drew);
		this.players.push(rebecca);
		drew.printInfo();
		rebecca.printInfo();
	}

	public buyMerchantCard(): void {

	}

}
