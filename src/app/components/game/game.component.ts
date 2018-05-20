import { Component, OnInit } from '@angular/core';

import { GOLEM } from '../../../assets/golem';
// import { Deck } from '../../models/deck';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	game: any = GOLEM;
	// golemDeck: Deck;

	constructor() { }

	ngOnInit() {
		this.generateDeck();
	}

	// showDeck(): void {
	//   this.golemDeck.forEach(element => {
	//     console.log(element);
	//   });
	// }

	generateDeck(): any {
		console.log(this.game['cards']['point']);
		return;
	}

}
