import { Card } from './card';
import { GOLEM } from '../../assets/golem';

export class Deck {

  private game = GOLEM;
  cards: Card[] = [];

  constructor(deckType) {
  }

  public generateDeck(type): Card[] {
    let cards;
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

  public castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }
}
