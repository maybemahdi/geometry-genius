// document.getElementById("tCalc").addEventListener("click", function () {
//   let tBase = document.getElementById("tBase");
//   let tBaseValue = tBase.value;
//   let base = parseFloat(tBaseValue);

//   let tHeight = document.getElementById("tHeight");
//   let tHeightValue = tHeight.value;
//   let height = parseFloat(tHeightValue);

//   let area = 0.5 * base * height;

//   alert(`The Area of given triangle is ${area}cm Square`);
// });

function getInput(inputField){
    let getInputField = document.getElementById(inputField);
    let inputFieldValue = getInputField.value;
    let input = parseFloat(inputFieldValue);
    return input;
}
document.getElementById("tCalc").addEventListener("click", function (){
    let tBase = getInput("tBase");
    let tHeight = getInput("tHeight");
    let area = 0.5 * tBase * tHeight;
    alert(`The Area of given Triangle is ${area}cm²`);
});