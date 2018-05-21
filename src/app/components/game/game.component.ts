import { Component, OnInit } from '@angular/core';

import { GOLEM } from '../../../assets/golem';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	game: any = GOLEM;
	golemDeck = new Deck('golem');
	merchantDeck = new Deck('merchant');

	constructor() { }

	ngOnInit() {
		console.log('\n\n\nGOLEM');
		this.golemDeck.showDeck();
		console.log('\n\n\nMERCHANT');
		this.merchantDeck.showDeck();
	}

}
