function getInput(inputField) {
  let getInputField = document.getElementById(inputField);
  let inputFieldValue = getInputField.value;
  let input = parseFloat(inputFieldValue);
  return input;
}
document.getElementById("pentaCalc").addEventListener("click", function () {
  let pentaP = getInput("pentaP");
  let pentaB = getInput("pentaB");
  let area = 0.5 * pentaP * pentaB;
  alert(`The Area of given Pentagon is ${area}cm²`);
});
