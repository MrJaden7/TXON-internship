function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
  
function calculate() {
    var result = document.getElementById("result").value;
    var calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
}
  