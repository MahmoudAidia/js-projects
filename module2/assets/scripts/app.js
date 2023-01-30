let defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

/*Collect and store the data in object and parse it to array */
function writeToLog(
  operationIdenitfier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdenitfier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/*Get input form an input field. */
function getUserNumberInput() {
  return parseInt(userInput.value);
}

/*Generate and calculate the operation performed. */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber} `;
  outputResult(currentResult, calcDescription); // from the vendor file
}

//The calculator function
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

/*Addition operation */
function add() {
  calculateResult("ADD");
}

/*Subtraction operation */
function subtract() {
  calculateResult("SUBTRACT");
}

/*Mutiplication operation */
function multiply() {
  calculateResult("MULTIPLY");
}

/*Divition operation */
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
