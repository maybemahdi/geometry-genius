function getInput(inputField){
    let getInputField = document.getElementById(inputField);
    let inputFieldValue = getInputField.value;
    let input = parseFloat(inputFieldValue);
    return input;
}
document.getElementById("romCalc").addEventListener("click", function (){
    let romD1 = getInput("romD1");
    let romD2 = getInput("romD2");
    let area = 0.5 * romD1 * romD2;
    alert(`The Area of given Rombhos is ${area}cm²`);
});