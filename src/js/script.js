'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    const poster = document.querySelector('.promo__bg');
    const genre = document.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let newFilm = addInput.value;
        const isFavoriteFilm = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 21)}...`;
            }

            if (isFavoriteFilm) {
                console.log(`Add Favorite Movie`);
            }

            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, movieList);
        }

        evt.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach((adv) => adv.remove());
    };

    const makeChanges = () => {
        genre.textContent = 'DRAMA';
        poster.style.backgroundImage = 'url(./img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((movie, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${index + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(advBlocks);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
