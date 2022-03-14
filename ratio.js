class Ratio {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
		this.simplify();
	}

	simplify() {
		let n = Math.abs(this.numerator);
		let d = Math.abs(this.denominator);
		while (d) {
			var t = d;
			d = n % d;
			n = t;
		}

		if (n) {
			this.numerator = this.numerator / n;
			this.denominator = this.denominator / n;
		}

		if (this.denominator < 0) {
			this.numerator = this.numerator * -1;
			this.denominator = this.denominator * -1;
		}
	}

	add(other) {
		let n1 = this.numerator;
		let d1 = this.denominator;
		let n2 = other.numerator;
		let d2 = other.denominator;

		n1 = n1 * d2;
		n2 = n2 * d1;
		d1 = d1 * d2;

		return new Ratio(n1 + n2, d1);
	}

	subtract(other) {
		return this.add(new Ratio(-other.numerator, other.denominator));
	}

	multiply(other) {
		return new Ratio(
			this.numerator * other.numerator,
			this.denominator * other.denominator
		);
	}

	divide(other) {
		return new Ratio(
			this.numerator * other.denominator,
			this.denominator * other.numerator
		);
	}

	invert() {
		return new Ratio(1, 1).divide(new Ratio(this.numerator, this.denominator));
	}

	equals(other) {
		return (
			this.numerator === other.numerator &&
			this.denominator === other.denominator
		);
	}

	text() {
		if (this.denominator === 1) return this.numerator;
		return this.numerator + "/" + this.denominator;
	}

	approximate() {
		return this.numerator / this.denominator;
	}
}
