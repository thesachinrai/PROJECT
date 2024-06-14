// Function to add a character or operator to the display
function addToDisplay(char) {
  let display = document.getElementById('display');
  if (display.innerHTML === '0' && char !== '.') {
      display.innerHTML = char;
  } else {
      display.innerHTML += char;
  }
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').innerHTML = '0';
}

// Function to calculate the result
function calculate() {
  let display = document.getElementById('display');
  let equation = display.innerHTML;

  try {
      let result = eval(equation);
      display.innerHTML = result;
  } catch (error) {
      display.innerHTML = 'Error';
  }
}
