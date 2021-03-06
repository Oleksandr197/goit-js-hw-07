// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//  після чого вставить всі li за одну операцію в список ul.ingredients.
//   Для створення DOM-вузлів використовуй document.createElement().
// В HTML є пустий список ul#ingredients.
//  <ul id="ingredients"></ul>
// // В JS є масив рядків.

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsLiRef = document.querySelector('#ingredients');
    

const createLiIngredient = ingredient => {
  const itemLiRef = document.createElement('li');
  itemLiRef.textContent = ingredient;
  return itemLiRef;
};
const ingredientLiRef = ingredients.map(ingredient =>
  createLiIngredient(ingredient),
);
 console.log(ingredientLiRef);
ingredientsLiRef.append(...ingredientLiRef);



