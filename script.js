const testCases = [
	"new Ratio(1, 4).text();",
	"new Ratio(2, 6).text();",
	"new Ratio(2, 6).multiply(new Ratio(5, 4)).text();"
];

let code = "";
function updateCode(e) {
	code = e.target.value;
}

function sendCode() {
	if(code !== "") {
		testCases[testCases.length] = code;
		displaySkeleton();
		displayResults();
	}
}

function hput(id, content) {
	document.getElementById(id).innerHTML = content;
}

function loaded() {
	let codeInput = document.getElementById("code-input");
	codeInput.addEventListener("input", updateCode);

	displaySkeleton();
	displayResults();
}

function displaySkeleton() {
	let skeleton = "";
	for (let i = 0; i < testCases.length; i++)
		skeleton +=
			"\t\t<div class=\"test-case\">\n" +
			"\t\t\t<p class=\"ml-code\">" + testCases[i] + "</p>\n" +
			"\t\t\t<p class=\"result\" id=\"rvar-test" + i + "\"></p>\n" +
			"\t\t</div>\n\n";
	hput("test-cases", skeleton);
}

function displayResults() {
	for (let i = 0; i < testCases.length; i++)
		hput("rvar-test" + i, "<b> = " + eval(testCases[i]) + "</b>");
}