let buttonElement = document.getElementById('change-quote-button');
let quoteElement = document.getElementById('quote');
let authorElement = document.getElementById('author');

function randomIntegerGenerator(min, max){
  return Math.floor(Math.random() * (max-min) + min);    
}

function changeQuote(){
  let randomIndex = randomIntegerGenerator(0, quotes.length);
  quoteElement.innerText = `"${quotes[randomIndex].text}"`;
  authorElement.innerText = quotes[randomIndex].author;
}

changeQuote();

buttonElement.addEventListener('click', changeQuote);