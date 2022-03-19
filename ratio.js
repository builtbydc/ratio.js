class Ratio {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
		this.simplify();
	}

	static fromFloat(number, optionalTuning) {
		if (optionalTuning === undefined) optionalTuning = 8;

		let head = Math.floor(number);
		let tail = number - head;

		let pow10;
		for (let i = 0; ; i++) {
			pow10 = Math.pow(10, i);
			let temp = tail * pow10;
			if (Math.floor(temp) === temp) break;
		}

		let bestNumerator;
		let bestDenominator;
		let approx = 2;
		let found = false;

		if (pow10 >= Math.pow(10, optionalTuning)) {

			let maxDen = Math.min(pow10, Math.pow(10, 14 - optionalTuning));
			for (let den = 1; den < maxDen; den++) {
				for (let num = Math.floor(tail * den); num <= Math.ceil(tail * den); num++) {

					approx = num / den;

					let err1 = 0.5 / pow10;
					if (Math.abs(approx - tail) <= err1) {
						bestNumerator = num;
						bestDenominator = den;
						found = true;
						break;
					}
				}
				if (found) break;
			}
		}

		let err2 = 1 / Math.pow(10, optionalTuning);
		if (Math.abs(approx - tail) > err2 || !found) {
			bestNumerator = Math.floor(tail * pow10);
			bestDenominator = pow10;
		}

		return new Ratio(head * bestDenominator + bestNumerator, bestDenominator);
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

	number() {
		return this.numerator / this.denominator;
	}
}
