import { Injectable } from '@angular/core';

import { Gems } from './../models/gems';

@Injectable()
export class GemService {

  constructor() { }

  public getGemCounts(gems: string): object {
    const counter = {};
    // for (let i = 0; i < gems.length; i++) {
    //   if (counter[gems[i]]) {
    //     counter[gems[i]]++;
    //   } else {
    //     counter[gems[i]] = 1;
    //   }
    // }
    return counter;
  }
}
