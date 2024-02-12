function getInput(inputField){
    let getInputField = document.getElementById(inputField);
    let inputValue = getInputField.value;
    let input = parseFloat(inputValue);
    return input; 
}

document.getElementById("pCalc").addEventListener('click', function (){
    let pBase = getInput("pBase");
    let pHeight = getInput("pHeight");
    let area = pBase * pHeight;
    alert(`The Area of given Parallelogram is ${area}cm²`);
})