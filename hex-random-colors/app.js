/* Select DOM elements */
const button = document.querySelector('button');
const color = document.getElementById('color');

/* Function for select a random color */
function generateHexRandomColor(){
  let digits = '0123456789ABCDEF';
  let hexColor = '#';

  for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * 16);
    hexColor += digits[randomIndex];
  }

  return hexColor;
}

/* DOM event */
button.addEventListener('click', function(){
  let randomColor = generateHexRandomColor();
  // Update text
  color.textContent = randomColor;
  // Update background color
  document.body.style.backgroundColor = randomColor
})