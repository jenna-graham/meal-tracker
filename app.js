import { renderIngredient } from './utils.js';

// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredient-form');
const ingredientsList = document.getElementById('ingredients-list');
const form = document.getElementById('ingredient-form');

const remove = document.getElementById('remove-button');
// let state
let ingredients = [];

function displayIngredients() {
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

    displayIngredients();
    form.reset();
 
});

remove.addEventListener('click', () => {
    ingredients.pop();
    displayIngredients();

});
