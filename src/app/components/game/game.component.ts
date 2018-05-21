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
		this.players = this.shufflePlayers(this.playerNameInput).map((playerName, i) => new Player(playerName, i));
	}

	// TODO: abstract out with shuffle deck method to avoid duplication
	private shufflePlayers(players): string[] {
		const shuffledPlayers = players;
		let i = 0;
		let j = 0;
		let temp = null;
		for (i = shuffledPlayers.length - 1; i > 0; i--) {
			j = Math.floor((Math.random() * shuffledPlayers.length));
			temp = shuffledPlayers[i];
			shuffledPlayers[i] = shuffledPlayers[j];
			shuffledPlayers[j] = temp;
		}
		return shuffledPlayers;
	}

	public buyMerchantCard(): void {

	}
}
