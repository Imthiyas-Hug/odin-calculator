let operand1 = "";
let operator = "";
let operand2 = "";
let tempOperator = "";

const display1 = document.querySelector(".screen1");
const display2 = document.querySelector(".screen2");
const digitBtns = document.querySelectorAll(".digitBtn")
const operatorBtns = document.querySelectorAll(".operatorBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalToBtn = document.querySelector("#equalToBtn");
const chainingBtn = document.querySelectorAll(".chaining");
const decimalBtn = document.querySelector(".decimal")

const add = function (a, b) {

    return a + b;

}

const subtract = function (a, b) {

    return a - b;

}

const multiply = function (a, b) {

    return a * b;

}

const divide = function (a, b) {

    if (b === 0) return 'Error';

    return a / b;

}

const roundResult = (result) => {

    const resultString = result.toString();

    if (resultString.includes(".")) {

        const decimalPart = resultString.split(".")[1];

        if (decimalPart && decimalPart.length > 3) {

            return Number(result.toFixed(3));

        }

    }

    return result;

}

const operate = function (num1, operator, num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {

        case "+":

            return add(num1, num2);

        case "-":

            return subtract(num1, num2);

        case "x":

            return multiply(num1, num2);

        case "*":

            return multiply(num1, num2);

        case "÷":

            return divide(num1, num2);

        case "/":

            return divide(num1, num2);
    }
}

const deleteValue = function () {

    if (display2.textContent !== "") {

        display2.textContent = display2.textContent.slice(0, -1);

    }
    else {

        display1.textContent = "";

    }
}

const clearAll = function () {

    operand1 = '';
    operand2 = '';
    operator = '';
    tempOperator = '';

    display1.innerHTML = '';
    display1.textContent = '';

    display2.innerHTML = '';
    display2.textContent = "0";

}

const chaining = function () {

    if (operand1 && operator) {

        operand2 = getTextContent();

        display2.textContent = roundResult(operate(operand1, operator, operand2));

        operand1 = roundResult(operate(operand1, operator, operand2));

        display1.textContent = `${operand1} ${tempOperator}`;

        operator = "";

    }
    else {

        return;

    }
}

const equalButton = function () {

    if (display2.textContent === "") return;

    if (operand1 == '') return;

    if (operator == '') return;

    if (operand1 && operator) {

        operand2 = getTextContent();

    }

    display2.textContent = roundResult(operate(operand1, operator, operand2));

    display1.textContent = `${operand1} ${operator} ${operand2} =`;

    operand1 = "";
    operand2 = "";
    operator = "";
}

const decimalPoint = function () {

    if (display2.textContent == "") {

        display2.textContent += 0;

    }

    if (!display2.textContent.includes('.')) {

        display2.textContent += event.target.textContent;

    }

}

function getTextContent() {

    return display2.textContent;

}

function clearDisplay() {

    display2.textContent = "";

}

function populate(value) {

    if (display2.innerHTML === "0") {

        clearDisplay();

    }

    display2.textContent += value;

}

function updateOperator(value) {

    tempOperator = value;

}

operatorBtns.forEach(operatorBtn => {

    operatorBtn.addEventListener("click", (event) => {

        if (!getTextContent()) return;

        updateOperator(event.target.textContent);

        if (tempOperator && !operand1) {

            operand1 = getTextContent();
        }

        display1.textContent = `${operand1} ${tempOperator}`;

        chaining();

    })
})

digitBtns.forEach((digitBtn) => {

    digitBtn.addEventListener("click", (event) => {

        if (tempOperator) {

            clearDisplay();

            operator = tempOperator;

            tempOperator = "";

        }

        populate(digitBtn.textContent);

    })

})

equalToBtn.addEventListener("click", () => {

    equalButton();

})

deleteBtn.addEventListener("click", () => {

    deleteValue();

})

clearBtn.addEventListener("click", () => {

    clearAll();

})

decimalBtn.addEventListener("click", event => {

    decimalPoint();

})

// Keyboard Support
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (!isNaN(key)) {

        if (tempOperator) {

            clearDisplay();

            operator = tempOperator;

            tempOperator = "";

        }

        populate(key)

    }

    if (['+', '-', '*', '/', 'x', '÷'].includes(key)) {

        if (!getTextContent() || display2.textContent == "0") return;

        updateOperator(key);

        if (tempOperator && !operand1 && display2.textContent != "0") {

            operand1 = getTextContent();
        }

        display1.textContent = `${operand1} ${tempOperator}`;

        chaining();

    }

    if (key == "=") {

        equalButton();

    }

    if (key == "Backspace") {

        deleteValue();

    }

    if (key == "Escape") {

        clearAll();

    }

    if (key == '.'){

        decimalPoint();

    }

})