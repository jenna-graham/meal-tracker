import { renderIngredient } from './utils.js';
import { renderMeal } from './utils.js';

// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredient-form');
const ingredientsList = document.getElementById('ingredients-list');
const form = document.getElementById('ingredient-form');
const userInput = document.getElementById('recipe-name');
const save = document.getElementById('save-recipe');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove-button');
// let state
let ingredients = [];
let meals = [];

function displayIngredients() {
    ingredientsList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientsList.append(li);
    }
}
function displayMeals() {
    userInput.value = '';
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.append(li);
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

save.addEventListener('click', () => {

    const meal = {
        name: userInput.value,
        ingredientCount: ingredients.length,
    };
    meals.push(meal);
    displayMeals();

    ingredients = [];
    displayIngredients();

});
