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
promoBg.style.cssText = 'background: url(./img/bg.jpg) center center/cover no-repeat';

// task 4 && 5
const promoItems = document.querySelectorAll('.promo__interactive-item');
const sortedMovies = movieDB.movies.sort();
promoItems.forEach((item, i) => {
  item.textContent = `${i + 1} ` + sortedMovies[i];
});
