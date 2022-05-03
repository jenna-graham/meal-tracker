import { renderIngredient } from './utils';

// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredient-form');
const ingredientsList = document.getElementById('ingredients-list');

// let state
let ingredients = [];

function renderIngredients() {
    ingredientsList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientsList.append(li);
    }


}

// set event listeners 
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    // console.log(ingredientData.get('food-name'));
    // console.log(ingredientData.get('quantity'));
    // console.log(ingredientData.get('measurement'));

    let ingredient = {
        name: ingredientData.get('name'),
        quantity: ingredientData.get('quantity'),
        measurement: ingredientData.get('measurement'),
    };    
    ingredients.push(ingredient);
    console.log('list of ingredients', ingredients);

    renderIngredients();

    
    

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
