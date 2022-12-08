let operand1 = 0
let operand2
let equals

let inputVal = document.getElementById("calc")

let addition = false
let subtraction = false
let multiplication = false
let division = false


let counter = false

function pressOne(){
  if (counter === true) {
    inputVal.value = 1
    counter = false
  } else {
    count(1)
  }
}
 
function pressTwo(){
  if (counter === true) {
   inputVal.value = 2
   counter = false
 } else {
   count(2)
 }
}

function count(num) {
  if (inputVal.value == 0) {
    inputVal.value = num
  } else {
    inputVal.value += num
  }
}

function pressThree(){
  if (counter === true) {
    inputVal.value = 3
    counter = false
  } else {
    count(3)
  }
}

function pressFour(){
  if (counter === true) {
    inputVal.value = 4
    counter = false
  } else {
    count(4)
  }
}

function pressFive(){
  if (counter === true) {
    inputVal.value = 5
    counter = false
  } else {
    count(5)
  }
}

function pressSix(){
  if (counter === true) {
    inputVal.value = 6
    counter = false
  } else {
    count(6)
  }
}

function pressSeven(){
  if (counter === true) {
    inputVal.value = 7
    counter = false
  } else {
    count(7)
  }
}

function pressEight(){
  if (counter === true) {
    inputVal.value = 8
    counter = false
  } else {
    count(8)
  }
}

function pressNine(){
  if (counter === true) {
    inputVal.value = 9
    counter = false
  } else {
    count(9)
  }
}

function pressZero(){
  if (counter === true) {
    inputVal.value = 0
    counter = false
  } else {
    count(0)
  }
}

function add(){
if (operand1 === 0) {
  localStorage.setItem("myValue", inputVal.value)
  operand1 = localStorage.getItem("myValue")
  console.log(operand1)
  inputVal.value = 0
  addition = true
} else {
  operand2 = inputVal.value
  equals = Number(operand1) + Number(operand2)
  inputVal.value = equals
  console.log(operand1 + " + " + operand2 + " is equal to = " + equals)
  }
}

function subtract(){
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
    console.log(operand1)
    inputVal.value = 0
    subtraction = true
  } else {
    operand2 = inputVal.value
    equals = Number(operand1) - Number(operand2)
    inputVal.value = equals
    console.log(operand1 + " - " + operand2 + " is equal to = " + equals)
  }
}

function multiply() {
  if (operand1 === 0) {
    localStorage.setItem("myValue", inputVal.value)
    operand1 = localStorage.getItem("myValue")
    console.log(operand1)
    inputVal.value = 0
    multiplication = true
  } else {
    operand2 = inputVal.value
    equals = Number(operand1) * Number(operand2)
    inputVal.value = equals
    console.log(operand1 + " x " + operand2 + " is equal to = " + equals)
  }
}

function divide() {
  if (operand1 === 0) {
  localStorage.setItem("myValue", inputVal.value)
  operand1 = localStorage.getItem("myValue")
  console.log(operand1)
  inputVal.value = 0
  division = true
} else {
  operand2 = inputVal.value
  equals = Number(operand1) / Number(operand2)
  inputVal.value = equals
  console.log(operand1 + " ÷ " + operand2 + " is equal to = " + equals)
  }
}

function equalTo(){
  operand1 = localStorage.getItem("myValue")
  operand2 = inputVal.value
  if (addition){
    equals = Number(operand1) + Number(operand2)
    console.log(operand1 + " + " + operand2 + " is equal to = " + equals)
  } else if (subtraction){
    equals = Number(operand1) - Number(operand2)
    console.log(operand1 + " - " + operand2 + " is equal to = " + equals)
  } else if (multiplication){
    equals = Number(operand1) * Number(operand2)
    console.log(operand1 + " x " + operand2 + " is equal to = " + equals)
  } else{
    equals = Number(operand1) / Number(operand2)
    console.log(operand1 + " ÷ " + operand2 + " is equal to = " + equals)
  }
  inputVal.value = equals
  counter = true
}

function clearOut(){
  inputVal.value = 0
  operand1=0
  operand2=0
  addition = false
  subtraction = false
  multiplication = false
  division = false
  localStorage.clear()
  console.log("CLEAR!")
}
