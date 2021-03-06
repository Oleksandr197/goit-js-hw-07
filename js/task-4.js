// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

//     Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
//     Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
//     Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

let counterValue = 0;
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});
