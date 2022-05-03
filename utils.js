export function renderIngredient(ingredient) {
    const li = document.createElement('li');
    li.textContent = `${ingredient.name} (${ingredient.quantity}) (${ingredient.measurement}`;
    return li;
}