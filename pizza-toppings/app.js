const pizzaTypes = document.getElementById('pizza-types');
const toppingsList = document.getElementById('toppings-list');

function changePizza(){
  Array.from(toppingsList.children).forEach(child => child.remove());
  const selectedpizza = pizzas.find(
    pizza => pizza.name === pizzaTypes.selectedOptions[0].innerText);
    
    if (selectedpizza){
      selectedpizza.ingredients.forEach((ingredient, index) => {
        const newTopping = document.createElement('li');
        newTopping.classList.add('toppings');
        if (index % 3 === 0){
          newTopping.classList.add('green');
        }
        else if (index % 3 === 1){
          newTopping.classList.add('white');
        }
        else{
          newTopping.classList.add('red');
        }
        newTopping.innerText = ingredient
        toppingsList.appendChild(newTopping);
      });
  }
}

pizzaTypes.addEventListener('change',changePizza);