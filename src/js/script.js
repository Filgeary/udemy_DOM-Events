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

const promoAdv = document.querySelector('.promo__adv');
promoAdv.remove();

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
