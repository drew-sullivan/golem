import { Card } from './card';
import { GOLEM } from '../../assets/golem';

export class Deck {

  public cards: Card[];
  private game = GOLEM;

  constructor(type) {
    if (type === 'golem') {
      this.cards = this.generateDeck('golem');
    } else {
      this.cards = this.generateDeck('merchant');
    }
  }

  public generateDeck(type): Card[] {
    let cards = null;
    if (type === 'golem') {
      const tempCards = this.game['cards']['point'];
      cards = tempCards.map(item => this.castToCard(item));
    } else {
      const tempMultiplesAllowedCards = this.game['cards']['merchant']['nonStarting']['multiplesAllowed'];
      const tempMultiplesNotAllowedCards = this.game['cards']['merchant']['nonStarting']['multiplesNotAllowed'];
      const multiplesAllowedCards = tempMultiplesAllowedCards.map(item => this.castToCard(item, true));
      const multiplesNotAllowedCards = tempMultiplesNotAllowedCards.map(item => this.castToCard(item));
      cards = multiplesAllowedCards.concat(multiplesNotAllowedCards);
    }
    return cards;
  }

  public showDeck(): void {
    this.cards.map(item => console.log(item));
  }

  public shuffleDeck(): void {
    // Fisher-Yates Shuffle
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  private castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }
}
