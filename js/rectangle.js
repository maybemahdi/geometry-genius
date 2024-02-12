function getInput(inputField){
    let getInputField = document.getElementById(inputField);
    let inputValue = getInputField.value;
    let input = parseFloat(inputValue);
    return input;
}
document.getElementById("rCalc").addEventListener('click', function (){
    let rWidth = getInput("rWidth");
    let rLength = getInput("rLength");
    let area = rWidth * rLength;
    alert(`The Area of given Rectangle is ${area}cm²`);
})



