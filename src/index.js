const primaryColor = "red";
const secondaryColor = "blue";

const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) + parseInt(secondElement.value);
  alert(sum);
});
