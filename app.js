const display = document.getElementById('display');


function appendNumber(number) {
  display.value += number;
}

function add() {
  display.value += '+';
}

function subtract() {
  display.value += '-';
}

function multiply() {
  display.value += '*';
}

function divide() {
  display.value += '/';
}


function clearDisplay() {
  display.value = '';
}



// Function to evaluate the expression and display the result
// function calculate() {
//   const result = eval(display.value);
//   display.value = result;
// }