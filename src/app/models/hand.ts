import { GOLEM } from './../../assets/golem';
import { Card } from './card';

export class Hand {
  public cards: Card[];
  private game = GOLEM;

  constructor() {
    const tempStartingCards = this.game['cards']['merchant']['starting'];
    const startingCards = tempStartingCards.map(obj => this.castToCard(obj));
    startingCards.forEach(card => this.cards.push(card));
  }

  public showHand(): void {
    this.cards.forEach(card => console.log(card));
  }

  private castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }
}
