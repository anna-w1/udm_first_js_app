const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

const lastMovie = prompt("Одни из просмотренных последних фильмов?");
const rateMovie = prompt("На сколько оцените его?");
console.log(lastMovie);
console.log(rateMovie);

let personalMovieDB = {     // объект
    count: numberOfFilms,  // под ключом "name" хранится значение "John"
    movies: {
        lMovie: lastMovie,
        rMovie: rateMovie,
    },
    actors: {},
    genres: [],
    privat: false,        // под ключом "age" хранится значение 30
  };
  console.log(personalMovieDB);