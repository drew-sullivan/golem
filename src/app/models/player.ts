import { Card } from './card';
import { GOLEM } from '../../assets/golem';

export class Player {

  private game = GOLEM;
  name: string;
  points: number;
  hand: Card[];
  gems: string;
  turnOrderPosition: number;
  isActivePlayer: boolean;

  constructor(name: string, turnOrderPosition: number) {
    this.name = name;
    this.points = 0;
    this.hand =  this.game.cards.merchant.starting.map(item => this.castToCard(item));
    this.gems = this.getStartingGems(turnOrderPosition);
    this.turnOrderPosition = turnOrderPosition;
    this.isActivePlayer = this.getTurnStatus(turnOrderPosition);
  }

  public printInfo(): void {
    console.log(`
    Name: ${this.name}
    Points: ${this.points}
    Hand: ${this.hand}
    Gems: ${this.gems}
    turnOrderPosition: ${this.turnOrderPosition}
    Currently this player's turn? ${this.isActivePlayer}
    `);
  }

  private getStartingGems(turnOrderPosition): string {
    if (turnOrderPosition === 0) {
      return 'yyy';
    } else if (turnOrderPosition === 1 || turnOrderPosition === 2) {
      return 'yyyy';
    } else {
      return 'yyyg';
    }
  }

  private getTurnStatus(turnOrderPosition): boolean {
    if (turnOrderPosition === 0) {
      return true;
    } else {
      return false;
    }
  }

  private castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }
}
