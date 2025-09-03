let num1 = "";
let num2 = "";
let arithmetic = "";
let operator = "";
let result = "";

const resultDisplay = document.querySelector(".resultDisplay")
const digitBtn = document.querySelectorAll(".digitBtn")
const operatorBtn = document.querySelectorAll(".operatorBtn")
const eqaulToBtn = document.querySelector("#equalToBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const clearBtn = document.querySelector("#clearBtn")

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
function calculate(num1, operator, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    return num1 = operate(num1, operator, num2); 
}
operatorBtn.forEach(op => {
    op.addEventListener("click", (e) => {
        if (!num1) {
            num1 = resultDisplay.textContent;
        } else {
            num2 = resultDisplay.textContent;
        }
        console.log(`num1:${num1}`)
        console.log(`num2:${num2}`)
        if (num1 && num2) {
            num1 = Number(num1)
            num2 = Number(num2)
            num1 = operate(num1, operator, num2);
            resultDisplay.textContent = num1;

        }
        operator = op.textContent;
        arithmetic = e.target.textContent


    })
})

digitBtn.forEach(digit => {
    digit.addEventListener("click", () => {
        let digitNumber = digit.textContent;
        populate(digitNumber);
    })
})

deleteBtn.addEventListener("click", () => {
    result = resultDisplay.textContent;
    result = result.slice(0, -1);
    resultDisplay.textContent = result;
})

eqaulToBtn.addEventListener("click", () => {
    calculate(num1,operator,num2)
})

clearBtn.addEventListener("click", () => {
    resultDisplay.innerHTML = "";
    num1 = "";
    num2 = "";
    operator = "";
})

window.onload = function () {
    resultDisplay.innerHTML = "";
}

function populate(number){
    display.textContent += number;
}

if(operand1 && operator ){
    
}