const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {     // объект
    count: numberOfFilms,  // под ключом "name" хранится значение "John"
    movies: {},
    actors: {},
    genres: [],
    privat: false,        // под ключом "age" хранится значение 30
  };
  console.log(numberOfFilms);
  console.log(personalMovieDB);
  const lastMovie = prompt("Одни из просмотренных последних фильмов?");
  const rateMovie = prompt("На сколько оцените его?");
  console.log(lastMovie);
  console.log(rateMovie);