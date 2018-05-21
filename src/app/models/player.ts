import { Card } from './card';
import { GOLEM } from '../../assets/golem';

export class Player {

  private game = GOLEM;
  name: string;
  points: number;
  hand: Card[];
  gems: string;
  playOrder: number;
  isThisPlayersTurn: boolean;

  constructor(name: string, playOrder: number) {
    this.name = name;
    this.points = 0;
    this.hand =  this.game.cards.merchant.starting.map(item => this.castToCard(item));
    this.gems = this.getStartingGems(playOrder);
    this.playOrder = playOrder;
    this.isThisPlayersTurn = this.getTurnStatus(playOrder);
  }

  public printInfo(): void {
    console.log(`
    Name: ${this.name}
    Points: ${this.points}
    Hand: ${this.hand}
    Gems: ${this.gems}
    Currently this player's turn? ${this.isThisPlayersTurn}
    `);
  }

  private getStartingGems(playOrder): string {
    let startingGems = '';
    switch (playOrder) {
      case 1:
        startingGems = 'yyy';
        break;
      case 2:
      case 3:
        startingGems = 'yyyy';
        break;
      case 4:
      case 5:
        startingGems = 'yyyg';
        break;
      default:
        console.log('PROBLEM, DREW!');
      return startingGems;
    }
  }

  private getTurnStatus(playOrder): boolean {
    if (playOrder === 1) {
      return true;
    } else {
      return false;
    }
  }

  private castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }
}
