const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

// const lastMovie = prompt("Одни из просмотренных последних фильмов?");
// const rateMovie = prompt("На сколько оцените его?");
// console.log(lastMovie);
// console.log(rateMovie);

let personalMovieDB = {     // объект
    count: numberOfFilms,  
    movies: {
        // lMovie: lastMovie,
        // rMovie: rateMovie,
    },
    actors: {},
    genres: [],
    privat: false       
  };
  const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
  console.log(personalMovieDB);