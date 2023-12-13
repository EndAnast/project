'use strict';

// const result = confirm ('Are you here?');
// console.log (result);

// const answer = prompt ('Тебе есть 18?', '');
// console.log(typeof(answer));
const numberOfFilms = prompt ('Сколько фильмов вы уже смотерли?', '');
console.log (numberOfFilms);

const personalMovieDfa = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};
console.log (personalMovieDfa);

const answer = [];
answer [0] = prompt ('Один из последних просмотренных фильмов')