let operand1 = 0
let operand2
let equals
let seconder = 0

let inputVal = document.getElementById("calc")

let addition = false
let subtraction = false
let multiplication = false
let division = false

let counter = false
let stopper = false

function pressOne() {
  round(1)
}

function round(num){
  if (counter === true) {
    inputVal.value = num
    counter = false
  } else if (stopper === true){
    inputVal.value += num
    seconder += num
    stopper = false
  } else if (seconder != 0){
    inputVal.value +=num
    seconder += JSON.stringify(num)
  } else if (inputVal.value == 0) {
    inputVal.value = num
  } else {
    inputVal.value += num
  }
}


function equalTo(){
  if (addition){
   localStorage.setItem("onValue", seconder)
     operand2 = localStorage.getItem("onValue")
    equals = Number(operand1) + Number(operand2)
  } else if (subtraction){
    localStorage.setItem("onValue", seconder)
    operand2 = localStorage.getItem("onValue")
    equals = Number(operand1) - Number(operand2)
  } else if (multiplication){
    localStorage.setItem("onValue", seconder)
    operand2 = localStorage.getItem("onValue")
    equals = Number(operand1) * Number(operand2)
  } else{
    localStorage.setItem("onValue", seconder)
    operand2 = localStorage.getItem("onValue")
    equals = Number(operand1) / Number(operand2)
  }
  inputVal.value = equals
  counter = true
  stopper = false 
  addition = false
  subtraction = false
  multiplication = false
  division = false
  operand1 = 0
  seconder = 0
}
 
function pressTwo(){
  round(2)
}

function pressThree(){
  round(3)
}

function pressFour(){
  round(4)
}

function pressFive(){
  round(5)
}

function pressSix(){
  round(6)
}

function pressSeven(){
  round(7)
}

function pressEight(){
  round(8)
}

function pressNine(){
  round(9)
}

function pressZero(){
  round(0)
}

function add(){
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
   inputVal.value += "+"
    addition = true
    stopper = true
  }
}

function subtract(){
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
    inputVal.value += "-"
    subtraction = true
    stopper = true
  }
}

function multiply() {
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
    inputVal.value += "x"
    multiplication = true
    stopper = true 
  }
}

function divide() {
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
    inputVal.value += "÷"
    division = true
    stopper = true
  }
}


function clearOut(){
  inputVal.value = 0
  operand1 = 0
  operand2 = 0
  addition = false
  subtraction = false
  multiplication = false
  division = false
  counter = false
  timer = false 
  localStorage.clear()
  console.log("CLEAR!")
}
