const testCases = [
	"new Ratio(1, 4).toText();",
	"new Ratio(2, 6).toText();",
	"new Ratio(2, 6).multiply(new Ratio(5, 4)).toText();"
];

function loaded() {
	let codeInput = document.getElementById("code-input");
	codeInput.addEventListener("input", updateCode);

	displaySkeleton();
}

function displaySkeleton() {
	let skeleton = "";
	for (let i = 0; i < testCases.length; i++)
		skeleton +=
			"\t\t<div class=\"test-case\">\n" +
			"\t\t\t<p class=\"ml-code\">" + testCases[i] + "</p>\n" +
			"\t\t\t<p id=\"rvar-test" + i + "\"></p>\n" +
			"\t\t</div>\n\n";
	hput("test-cases", skeleton);
}

function displayResults() {
	for (let i = 0; i < testCases.length; i++)
		hput("rvar-test" + i, " = " + eval(testCases[i]));
}

function hput(id, content) {
	document.getElementById(id).innerHTML = content;
}

let code = "";
function updateCode(e) {
	code = e.target.value;
}

function sendCode() {
	testCases[testCases.length] = code;
	displaySkeleton();
}