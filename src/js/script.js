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
