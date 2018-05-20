export default class Card {
	public gemsIn: string | number | null;
	public pointsOut: number | null;
	public gemsOut: string | null;

	constructor(gemsIn: string | number | null, pointsOut: number | null, gemsOut: string | null) {
		this.gemsIn = gemsIn;
		this.pointsOut = pointsOut;
		this.gemsOut = gemsOut;
	}

	toString(): string {
		return `gemsIn: ${this.gemsIn}, pointsOut: ${this.pointsOut}, gemsOut: ${this.gemsOut}`;
	}
}
