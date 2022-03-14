const testCases = [
	"new Ratio(1, 4).toText()",
	"new Ratio(2, 6).toText()",
	"new Ratio(2, 6).multiply(new Ratio(5, 4)).toText()",
	"new Ratio(-2, 5).toText()",
	"new Ratio(2, 3).divide(new Ratio(1, 6)).toText()",
	"new Ratio(1, 7).toFloat()",
	"new Ratio(1, 3).add(new Ratio(1, 4)).toText()",
	"new Ratio(3, 7).subtract(new Ratio(2, 12)).toText()",
	"0.1 + 0.2 === 0.3",
	"new Ratio(1, 10).add(new Ratio(2, 10)).equals(new Ratio(3, 10))",
	"0.1 + 0.2",
	"new Ratio(1, 10).add(new Ratio(2, 10)).toFloat()",
	"new Ratio(4, -20).toText()",
	"new Ratio(-10, -100).toText()",
	"new Ratio(0, 10).toText()",
	"new Ratio(10, 0).toText()",
	"new Ratio(-10, 0).toText()",
	"new Ratio(0, 0).toText()",
	"new Ratio(10, 0).toFloat()",
	"new Ratio(0, 0).toFloat()",
	"new Ratio(0, 10).toFloat()"
]

function displaySkeleton() {
	let skeleton = "";
	for(let i = 0; i < testCases.length; i++)
		skeleton +=
			"\t\t<div class=\"test-case\">\n" +
			"\t\t\t<code>" + testCases[i] + ";</code>\n" +
			"\t\t\t<p> = </p>\n" +
			"\t\t\t<p id=\"rvar-test" + i + "\"></p>\n" +
			"\t\t</div>\n\n";
	hput("test-cases", skeleton);
}

function displayResults() {
	for(let i = 0; i < testCases.length; i++)
		hput("rvar-test" + i, eval(testCases[i]));
}

function hput(id, content) {
    document.getElementById(id).innerHTML = content;
}