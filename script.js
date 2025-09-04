const display1 = document.querySelector(".screen1")
const display2 = document.querySelector(".screen2");
const digitBtns = document.querySelectorAll(".digitBtn")
const operatorBtns = document.querySelectorAll(".operatorBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const clearBtn = document.querySelector("#clearBtn")
const equalToBtn = document.querySelector("#equalToBtn")
const chaining = document.querySelectorAll(".chaining")
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

    if(b === 0) return 'Error';
    const result = a / b;

    const decimalPart = result.toString().split(".")[1];
    if (decimalPart && decimalPart.length > 3) {
        return Number(result.toFixed(3));
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

        case "÷":

            return divide(num1, num2);
    }
}

function getTextContent() {

    return display2.textContent;

}

function clearDisplay() {

    display2.textContent = "";

}

function populate(event) {

    if (display2.innerHTML === "0") {

        clearDisplay();

    }

    display2.textContent += event.target.textContent;

}

let tempOperator = "";

function updateOperator(event) {

    tempOperator = event.target.textContent;

}

let operand1 = "";
let operator = "";
let operand2 = "";


operatorBtns.forEach(operatorBtn => {

    operatorBtn.addEventListener("click", (event) => {

        if (!getTextContent()) return;

        updateOperator(event);

        if (tempOperator && !operand1) {

            operand1 = getTextContent();

        }

        display1.textContent = `${operand1} ${tempOperator}`;

    })
})

digitBtns.forEach((digitBtn) => {

    digitBtn.addEventListener("click", (event) => {

        if (tempOperator) {

            clearDisplay();

            operator = tempOperator;

            tempOperator = "";

        }

        populate(event);

    })

})

equalToBtn.addEventListener("click", () => {

    if (display2.textContent === "") return;

    if (operand1 == '') return;

    if (operator == '') return;

    if (operand1 && operator) {

        operand2 = getTextContent();

    }

    display2.textContent = operate(operand1, operator, operand2);

    display1.textContent = `${operand1} ${operator} ${operand2} =`;

    operand1 = "";
    operand2 = "";
    operator = "";

})

deleteBtn.addEventListener("click", () => {

    if (display2.textContent !== "") {

        display2.textContent = display2.textContent.slice(0, -1);

    }
    else {
        display1.textContent = "";
    }
})

clearBtn.addEventListener("click", (e) => {

    operand1 = '';
    operand2 = '';
    operator = '';
    tempOperator = '';
    display1.innerHTML = '';
    display1.textContent = '';
    display2.innerHTML = '';
    display2.textContent = "0";

})

window.onload = function () {

    display1.innerHTML = '';

    display2.innerHTML = '0';

}

chaining.forEach(button => {
    button.addEventListener("click", (event) => {
        if (operand1 && operator) {

            console.log('operand2: ' + operand2);
            operand2 = getTextContent();
            console.log('operand2: ' + operand2);
            console.log(operator)
            display2.textContent = operate(operand1, operator, operand2);
            operand1 = operate(operand1, operator, operand2);
            display1.textContent = `${operand1} ${tempOperator}`;
            operator = "";
        }
        else {
            return;
        }
    })
})