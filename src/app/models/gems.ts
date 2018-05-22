export class Gems {
  y: number;
  g: number;
  t: number;
  m: number;
  upgrade: boolean;

  constructor(y = 0, g = 0, t = 0, m = 0, upgrade = false) {
    this.y = y;
    this.g = g;
    this.t = t;
    this.m = m;
  }
}
