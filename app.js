// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredient-form');


// let state
// let ingredients = 0;


// set event listeners 
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    console.log(ingredientData.get('food-name'));
    console.log(ingredientData.get('quantity'));
    console.log(ingredientData.get('measurement'));


    // let ingredient = {
    //     name: ingredientData.get('food-name'),
    //     quantity: ingredientData.get('quantity'),
    //     measurement: ingredientData.get('measurement'),
    // };    

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
