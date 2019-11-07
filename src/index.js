"use strict";

import { submit, divide, multiply, sub } from "./lib/operators";
import { handleClick } from "./lib/elements";

const submitButton = document.querySelector(".submit");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subButton = document.querySelector(".sub");

subButton.addEventListener("click", function() {
  handleClick("-", sub);
});

multiplyButton.addEventListener("click", function() {
  handleClick("x", multiply);
});

divideButton.addEventListener("click", function() {
  handleClick("/", divide);
});

submitButton.addEventListener("click", function() {
  handleClick("+", submit);
});
