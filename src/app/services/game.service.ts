import { Injectable } from '@angular/core';

import { Deck } from '../models/deck';
import { Card } from '../models/card';
import { Hand } from '../models/hand';
import { Player } from '../models/player';

@Injectable()
export class GameService {

  golemDeck = new Deck('golem');
	merchantDeck = new Deck('merchant');
	availableGolemCards: Card[];
  availableMerchantCards: Card[];
  playerNameInput = ['Drew', 'Rebecca'];
  players: Player[] = [];
  activePlayer: Player = null;
  activePlayerIndex = 0;

  constructor() {
    this.golemDeck.shuffleDeck();
		this.merchantDeck.shuffleDeck();
		this.availableGolemCards = this.golemDeck.cards.slice(0, 5);
		this.availableMerchantCards = this.merchantDeck.cards.slice(0, 6);
    this.players = this.shufflePlayers(this.playerNameInput).map((playerName, i) => new Player(playerName, i));
    this.activePlayer = this.players[this.activePlayerIndex];
  }

  public endTurn(): void {
    if (this.activePlayerIndex === this.players.length - 1) {
      this.activePlayerIndex = 0;
    } else {
      this.activePlayerIndex++;
    }
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
}
