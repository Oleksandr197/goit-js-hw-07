// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.

{/* <ul id="gallery"></ul> */}

// Використовуй масив об'єктів images для створення тегів img вкладених в li.
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryListRef = document.querySelector('#gallery');
console.log(galleryListRef);
galleryListRef.classList.add('gallery');

function createGallery(photos) {
  const galleryPhotos = photos.map(image => {
    const listItemRef = document.createElement('li');
    listItemRef.insertAdjacentHTML(
      'beforeend',
      `<li> <img src = '${image.url}' alt = '${image.alt}' width = '320' height='240'></li>`,
    );
    
    return listItemRef;
  });

  return galleryListRef.append(...galleryPhotos);
}
createGallery(images);