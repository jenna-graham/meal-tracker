export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.quantity} ${ingredient.measurement} of ${ingredient.name} `;
    return li;
}