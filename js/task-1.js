// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе
//  в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
//   (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:

//     Категорія: Тварини
//     Кількість елементів: 4
// В HTML є список категорій ul#categories.


const categoriesRef = document.querySelector('ul#categories');
//console.log(categoriesRef);
const itemAllRef = document.querySelectorAll('.item');
console.log(`У списку ${itemAllRef.length} категорії`);

// const itemLiClassRef = document.querySelector('li.item');
// console.log(itemLiClassRef);
//const itemClassRef = itemLiClassRef.querySelector('h2').textContent;
//console.log(`Категорія:`, itemClassRef);
// const totalItem = itemLiClassRef.querySelectorAll('li');
//  //console.log(totalItem);
// console.log(`Кількість елементів:`, totalItem.length);


    itemAllRef.forEach(element => {
        console.log(`Категорія: ${element.querySelector("h2").textContent}`);
        console.log(`У категорії: ${element.querySelectorAll("li").length}`);

    });





