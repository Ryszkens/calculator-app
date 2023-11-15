const prevNumber = document.querySelector(".previousNumber p");
const currentNumber = document.querySelector(".currentNumber");
const mathSign = document.querySelector(".mathSign");
const operator = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const calculatorHistory = document.querySelector(".history");
const historyBTN = document.querySelector(".history-btn");

let result = "";

function displayNumbers() {
	if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
	if (this.textContent === "." && currentNumber.innerHTML === "")
		return (currentNumber.innerHTML = ".0");

	currentNumber.innerHTML += this.textContent;
	console.log(this.textContent);
}

function operate() {
	if (currentNumber.innerHTML === "" && this.textContent === "-") {
		currentNumber.innerHTML = "-";
		return;
	} else if (currentNumber.innerHTML === "") {
		return;
	}

	if (mathSign.innerHTML !== "") {
		showResult();
	}

	prevNumber.innerHTML = currentNumber.innerHTML;
	mathSign.innerHTML = this.textContent;
	currentNumber.innerHTML = "";
}

function showResult() {
	if (prevNumber.innerHTML === "" || currentNumber.innerHTML === "") return;

	let a = Number(currentNumber.innerHTML);
	let b = Number(prevNumber.innerHTML);
	let operat = mathSign.innerHTML;

	switch (operat) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = b - a;
			break;
		case "x":
			result = a * b;
			break;
		case ":":
			result = b / a;
			break;
		case "2^":
			result = b ** a;
			break;
	}

	addToHistory();
	currentNumber.innerHTML = result;
	historyBTN.classList.add("active");
	prevNumber.innerHTML = "";
	mathSign.innerHTML = "";
}

function addToHistory() {
	const newHistoryItem = document.createElement("li");
	newHistoryItem.innerHTML = `${currentNumber.innerHTML} ${mathSign.innerHTML} ${prevNumber.innerHTML} = ${result}`;
	newHistoryItem.classList.add("history-item");
	calculatorHistory.appendChild(newHistoryItem);
}

function clearScreem() {
	result = "";
	prevNumber.innerHTML = "";
	currentNumber.innerHTML = "";
	mathSign.innerHTML = "";
}

function clearHistory() {
	calculatorHistory.textContent = "";

	if (calculatorHistory.textContent === "") {
		historyBTN.classList.remove("active");
		bbbb;
	}
}

// nasłuchiwanie

operator.forEach((button) => button.addEventListener("click", operate));

equals.addEventListener("click", showResult);

clearBtn.addEventListener("click", clearScreem);

numbers.forEach((button) => {
	button.addEventListener("click", displayNumbers);
});

historyBTN.addEventListener("click", clearHistory);
