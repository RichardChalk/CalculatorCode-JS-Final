const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // display.value = eval(display.value);
    let result = eval(display.value);
    display.value = parseFloat(result).toFixed(8);
  } catch (error) {
    display.value = "E";
    display.style.color = "red";
  }
}
