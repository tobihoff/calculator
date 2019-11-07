"use strict";

import { sum, divide, multiply, sub, countDigits } from "./lib/operators";
import { appendElementToElement, createDivWithContent } from "./lib/elements";

const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const submitButton = document.querySelector(".submit");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subButton = document.querySelector(".sub");
const result = document.querySelector("#result");
const lengthButton = document.querySelector(".length");

submitButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = sum(firstNumber, secondNumber);
});

divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = divide(firstNumber, secondNumber);
});

multiplyButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = multiply(firstNumber, secondNumber);
});
subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = sub(firstNumber, secondNumber);
});

lengthButton.addEventListener("click", function() {
  result2.innerHTML = countDigits(result.innerHTML);
});

function handleCLick(operator, operatorFunction) {
  const firstElement = parseInt(firstElement.value);
  const secondElement = parseInt(secondElement.value);
  let childResult = operatorFunction(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = operator;
  digitCounter.innerHTML = countDigits(
    operatorFunction(firstNumber, secondNumber)
  );
}
