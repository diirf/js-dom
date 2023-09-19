/* Select DOM elements */
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

/* Show the colors value */
let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

/* Function for update colors */
function updateBackgroundColor(red, green, blue){
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbColor;
}

/* DOM event */
redInput.addEventListener('change', () => {
  red = redInput.value;
  redText.innerText = red;
  updateBackgroundColor(red, green, blue)
});

greenInput.addEventListener('change', (e) => {
  green = e.target.value;
  greenText.innerText = green;
  updateBackgroundColor(red, green, blue)
});

blueInput.addEventListener('change', (e) => {
  blue = e.target.value;
  blueText.innerText = blue;
  updateBackgroundColor(red, green, blue)
});