import { Injectable } from '@angular/core';

import { Card } from '../models/card';

@Injectable()
export class CardService {

  constructor() { }

  public castToCard(obj, multiplesAllowed = false): Card {
    return new Card(obj.gemsIn, obj.pointsOut, obj.gemsOut, multiplesAllowed);
  }

}
