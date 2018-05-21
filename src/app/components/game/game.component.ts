import { Component, OnInit, Input } from '@angular/core';

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
	playerNameInput = ['Drew', 'Rebecca'];
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
		this.shufflePlayers(this.playerNameInput);
		this.createPlayerObjects(this.playerNameInput);
	}

	private createPlayerObjects(playerNames): void {
		this.playerNameInput.map(
			(playerName, i) => new Player(playerName, i)
		);
	}

	// TODO: abstract out with shuffle deck method to avoid duplication
	private shufflePlayers(players): void {
		let i = 0;
		let j = 0;
		let temp = null;
		for (i = this.playerNameInput.length; i > 0; i--) {
			j = Math.floor(Math.random() * this.playerNameInput.length + 1);
			temp = this.playerNameInput[i];
			this.playerNameInput[i] = this.playerNameInput[j];
			this.playerNameInput[j] = temp;
		}
	}

	public buyMerchantCard(): void {

	}

}
