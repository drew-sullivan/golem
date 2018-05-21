import { Card } from './card';

export class Hand {
  public cards: Card[];

  show(): void {
    this.cards.forEach(card => console.log(card));
  }
}
