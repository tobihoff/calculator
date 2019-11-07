import { countDigits } from "./operators";

const operator = document.querySelector(".operator");
const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const result = document.querySelector("#result");
const digitCounter = document.querySelector(".length");

export function createDivWithContent(content) {
  const newdiv = document.createElement("div");
  newdiv.innerHTML = content.toString();

  return newdiv;
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}

export function handleClick(operatorSign, operatorFunction) {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = operatorFunction(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = operatorSign;
  digitCounter.innerHTML = countDigits(
    operatorFunction(firstNumber, secondNumber)
  );
}
