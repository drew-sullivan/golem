import { Component, OnInit } from '@angular/core';

import { Deck } from '../../models/deck';
import { Card } from '../../models/card';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	golemDeck = new Deck('golem');
	merchantDeck = new Deck('merchant');

	constructor() { }

	ngOnInit() {
		this.golemDeck.shuffleDeck();
		this.merchantDeck.shuffleDeck();
	}

}
