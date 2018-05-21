export class Card {
	public gemsIn: string | number | null;
	public pointsOut: number | null;
	public gemsOut: string | null;
	public multiplesAllowed: boolean;

	constructor(
		gemsIn: string | number = 'none',
		pointsOut: number = 0,
		gemsOut: string = 'none',
		multiplesAllowed: boolean = false) {
			this.gemsIn = gemsIn;
			this.pointsOut = pointsOut;
			this.gemsOut = gemsOut;
			this.multiplesAllowed = multiplesAllowed;
	}

	toString(): string {
		return `
			gemsIn: ${this.gemsIn}, pointsOut: ${this.pointsOut},
			gemsOut: ${this.gemsOut}, multiplesAllowed: ${this.multiplesAllowed}
		`;
	}
}
