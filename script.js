let operand1;
let operator;
let operand2;

const display = document.querySelector(".screen2");
const digitBtns = document.querySelectorAll(".digitBtn")
const operatorBtns = document.querySelectorAll(".operatorBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const clearBtn = document.querySelector("#clearBtn")
const eqaulToBtn = document.querySelector("#equalToBtn")

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
    return a / b;
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
        case "/":
            return divide(num1, num2);
    }
}

function updateOperand1() {
    operand1 = display.textContent;
    console.log(`operand1: ${operand1}`);
}

function updateOperand2() {
    operand2 = display.textContent;
    console.log(`operand2: ${operand2}`);
}
function updateOperator(e) {
    operator = e.target.textContent;
    console.log(`operator: ${operator}`);
}
function clearDisplay() {
    display.textContent = "";
}
window.onload = function () {
    display.innerHTML = "";
    if (operand1 != undefined && operand2 != undefined
        && operator != undefined) {
        operand1 = "";
        operator = "";
        operand2 = "";
    }
}

digitBtns.forEach((digitBtn) => {
    digitBtn.addEventListener("click", (e) => {
        if (isOperatorSet) {
            clearDisplay()
            isOperatorSet = false;
        }
        display.textContent += e.target.textContent;
    })
})

let isOperatorSet = false;
let isClicked = false;
operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", (e) => {
        if (isClicked) return;
        if (display.textContent == "") return;
        if (!operand1) {
            updateOperand1();
            updateOperator(e);
            isOperatorSet = true;
            isClicked = true;
        } else {
            updateOperand2();
            let result = operate(operand1, operator, operand2)
            display.textContent = result;
            operand1 = result;
            updateOperator(e);
            isOperatorSet = true;
        }
    })
})

deleteBtn.addEventListener("click", () => {
    if (!display.textContent == "") {
        display.textContent = display.textContent.slice(0, -1);
    }
})

eqaulToBtn.addEventListener("click", () => {
    if (display.textContent === "") return;
    if (operand1 == undefined) return;
    if (operator == undefined) return;
    updateOperand2();
    display.textContent = operate(operand1, operator, operand2);
})

clearBtn.addEventListener("click", (e) => {
    if (display.textContent == "") return;
    display.innerHTML = "";
    if (operand1 != undefined && operand2 != undefined
        && operator != undefined) {
        operand1 = "";
        operator = "";
        operand2 = "";
    }

})