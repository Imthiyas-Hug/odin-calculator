const display1 = document.querySelector(".screen1")
const display2 = document.querySelector(".screen2");
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

        case "/":

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

    if(display2.innerHTML == 0){

        clearDisplay()

    }
    
    display2.textContent += event.target.textContent;

}

function updateOperator(event) {

    tempOperator = event.target.textContent;
    console.log(`tempOperator:${tempOperator}`);

}

let operand1;
let operator;
let operand2;
let tempOperator;

operatorBtns.forEach(operatorBtn => {

    operatorBtn.addEventListener("click", (event) => {

        if (!getTextContent()) return;

        updateOperator(event);

        if (tempOperator) {

            if (!operand1) {

                operand1 = getTextContent();
                
            }
            
        }

        display1.textContent = `${operand1} ${tempOperator}`

        if(operand1 && operator){
            
            operand2 = getTextContent()
            display2.textContent = operate(operand1,operator,operand2);
            display1.textContent = ``
        }

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

deleteBtn.addEventListener("click", () => {

    if (!display2.textContent == "") {

        display2.textContent = display2.textContent.slice(0, -1);

    }
})

eqaulToBtn.addEventListener("click", () => {

    if (display2.textContent === "") return;

    if (operand1 == undefined) return;

    if (operator == undefined) return;

    if (operand1 && operator) {

        operand2 = getTextContent();
    }
    else {
        return;  
    }

    display2.textContent = operate(operand1, operator, operand2);

    display1.textContent = `${operand1} ${operator} ${operand2} =`;

    operand1 = "";

})

clearBtn.addEventListener("click", (e) => {

    display1.innerHTML = ""

    display2.innerHTML = 0;

    operand1 = "";

    operator = "";

    operand2 = "";

})

window.onload = function () {

    display1.innerHTML = '';

    display2.innerHTML = "";

}

