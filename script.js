let initDisplay = 0

const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const display = document.querySelector(".display")
const timesButton = document.getElementById("*")
const subtractButton = document.getElementById("-")
const divideButton = document.getElementById("/")
const equalButton = document.getElementById("=")
const plusButton = document.getElementById("+")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")
const zeroButton = document.getElementById("0")

display.textContent = initDisplay

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2)
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  }
}
nineButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "9"
    }
    else {initDisplay += "9"
    }
    display.textContent = initDisplay
})
eightButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "8"
    }
    else {initDisplay += "8"
    }
    display.textContent = initDisplay
})
sevenButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "7"
    }
    else {initDisplay += "7"
    }
    display.textContent = initDisplay
})
sixButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "6"
    }
    else {initDisplay += "6"
    }
    display.textContent = initDisplay
})
fiveButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "5"
    }
    else {initDisplay += "5"
    }
    display.textContent = initDisplay
})
fourButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "4"
    }
    else {initDisplay += "4"
    }
    display.textContent = initDisplay
})
threeButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "3"
    }
    else {initDisplay += "3"
    }
    display.textContent = initDisplay
})
twoButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "2"
    }
    else {initDisplay += "2"
    }
    display.textContent = initDisplay
})
oneButton.addEventListener("click", function(){
    if (initDisplay == 0){
        initDisplay = "1"
    }
    else {initDisplay += "1"
    }
    display.textContent = initDisplay
})
clearButton.addEventListener('click', function(){
    initDisplay = 0
    display.textContent = initDisplay
})
deleteButton.addEventListener('click', function(){
    let arr = initDisplay.split("");
    arr.splice(-1, 1);
    let joinedarr = arr.join("");
    initDisplay = joinedarr;
    display.textContent = initDisplay;
});
