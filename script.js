let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    let listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

function calculateFactorial() {
    let num = parseInt(display.value);
    if (num < 0) {
        display.value = "Error";
        return;
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    addToHistory(num + "! = " + fact);
    display.value = fact;
}

function calculatePower() {
    let values = display.value.split("^");
    if (values.length === 2) {
        let base = parseFloat(values[0]);
        let exponent = parseFloat(values[1]);
        let result = Math.pow(base, exponent);
        addToHistory(display.value + " = " + result);
        display.value = result;
    }
}

function calculateSqrt() {
    let num = parseFloat(display.value);
    let result = Math.sqrt(num);
    addToHistory("√" + num + " = " + result);
    display.value = result;
}

function calculateCubeRoot() {
    let num = parseFloat(display.value);
    let result = Math.cbrt(num);
    addToHistory("∛" + num + " = " + result);
    display.value = result;
}

function calculateLog() {
    let num = parseFloat(display.value);
    let result = Math.log10(num);
    addToHistory("log(" + num + ") = " + result);
    display.value = result;
}

function calculateLn() {
    let num = parseFloat(display.value);
    let result = Math.log(num);
    addToHistory("ln(" + num + ") = " + result);
    display.value = result;
}

function calculateSin() {
    let num = parseFloat(display.value);
    let result = Math.sin(num * Math.PI / 180);
    addToHistory("sin(" + num + ") = " + result);
    display.value = result;
}

function calculateCos() {
    let num = parseFloat(display.value);
    let result = Math.cos(num * Math.PI / 180);
    addToHistory("cos(" + num + ") = " + result);
    display.value = result;
}

function calculateTan() {
    let num = parseFloat(display.value);
    let result = Math.tan(num * Math.PI / 180);
    addToHistory("tan(" + num + ") = " + result);
    display.value = result;
}

function calculateModulus() {
    let values = display.value.split("%");
    if (values.length === 2) {
        let result = parseFloat(values[0]) % parseFloat(values[1]);
        addToHistory(display.value + " = " + result);
        display.value = result;
    }
}

function addToHistory(calculation) {
    let historyList = document.getElementById('history-list');
    let historyItem = document.createElement('li');
    historyItem.textContent = calculation;
    historyList.appendChild(historyItem);

 
    document.querySelector('.history').classList.add('show');
}