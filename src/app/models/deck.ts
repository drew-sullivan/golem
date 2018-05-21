import { Card } from './card';
import { GOLEM } from '../../assets/golem';

export class Deck {

  game = GOLEM;
  cards: Card[];

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
      const multiplesAllowedCards = tempMultiplesAllowedCards.map(item => this.castToCard(item));
      const multiplesNotAllowedCards = tempMultiplesNotAllowedCards.map(item => this.castToCard(item));
      cards = multiplesAllowedCards.concat(multiplesNotAllowedCards);
    }
    return cards;
  }

  castToCard(obj): Card {
    return new Card(obj['gemsIn'], obj['pointsOut'], obj['gemsOut']);
  }

  showDeck(): void {
    this.cards.map(item => console.log(item));
  }
}
