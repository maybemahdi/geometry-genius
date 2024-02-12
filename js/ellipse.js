function getInput(inputField) {
    let getInputField = document.getElementById(inputField);
    let inputFieldValue = getInputField.value;
    let input = parseFloat(inputFieldValue);
    return input;
  }
  document.getElementById("eCalc").addEventListener("click", function () {
    let eA = getInput("eA");
    let eB = getInput("eB");
    let area = Math.PI * eA * eB;
    alert(`The Area of given Ellipse is ${area.toFixed(2)}cm²`);
  });
  