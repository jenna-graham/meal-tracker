export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.quantity} ${ingredient.measurement} of ${ingredient.name} `;
    return li;
}
export function renderMeal(meal) {
    const mealLi = document.createElement('li');
    mealLi.textContent = `> ${meal.name} - ${meal.ingredientCount} ingredient(s)`;
    return mealLi;
}