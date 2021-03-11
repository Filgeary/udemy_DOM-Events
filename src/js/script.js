/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const advBlocks = document.querySelectorAll('.promo__adv img');
advBlocks.forEach((adv) => adv.remove());

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url(./img/bg.jpg)';

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
