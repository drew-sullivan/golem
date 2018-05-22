import { Gems } from './gems';

export class Card {
	public gemsIn: Gems;
	public pointsOut: number | null;
	public gemsOut: Gems;
	public multiplesAllowed: boolean;

	constructor(
		gemsIn: string | number,
		pointsOut: number = 0,
		gemsOut: string = 'none',
		multiplesAllowed: boolean = false) {
			this.gemsIn = this.castToGems(gemsIn);
			this.pointsOut = pointsOut;
			this.gemsOut = this.castToGems(gemsOut);
			this.multiplesAllowed = multiplesAllowed;
	}

	private castToGems(gems: string | number): Gems {
		const counter = new Gems();
		if (typeof gems === 'string') {
			for (let i = 0; i < gems.length; i++) {
				if (counter[gems[i]]) {
					counter[gems[i]]++;
				} else {
					counter[gems[i]] = 1;
				}
			}
		} else {
			counter.upgrade = true;
		}
		// console.log(counter);
		return counter;
	}

	public toString(): string {
		return `
			gemsIn: ${this.gemsIn}, pointsOut: ${this.pointsOut},
			gemsOut: ${this.gemsOut}, multiplesAllowed: ${this.multiplesAllowed}
		`;
	}
}
