const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

//untuk menampilkan lebih dari 1 number di calculator-screen
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number)=> {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
})

//Variabel untuk Kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//Operator, untuk +-/*
const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    //Agar tidak eror saat ter-klik 2x
    if (calculationOperator==="") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

operators.forEach((operator)=> {
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value);
    });
});

//Kalkulasi
const equalSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
}

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

//Tombol AC
const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

//Kalkulasi Desimal
const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot;
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

