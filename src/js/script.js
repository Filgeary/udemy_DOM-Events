/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла Ленд',
    'Одержимость',
    'Скотт Пилигрим против...'
  ]
};

// task 1
const promoAdv = document.querySelector('.promo__adv');
promoAdv.remove();

// task 2
const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

// task 3
const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url(./img/bg.jpg)';

// task 4 && 5
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

const sortedMovies = Array.from(movieDB.movies).sort();

sortedMovies.forEach((movie, index) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">
      ${index + 1} ${movie}
      <div class="delete"></div>
    </li>
  `;
});
