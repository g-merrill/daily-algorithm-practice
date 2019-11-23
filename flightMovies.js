let flightLength = 300;
let movieLengths = [90, 120, 220, 193, 107, 140];

function flightMovies(flight, movies) {
  for (let i = 0; i < movies.length; i++) {
    let needed = flight - movies[i];
    if (movies.includes(needed) && needed !== movies[i]) return true;
  }
  return false;
}

console.log(flightMovies(flightLength, movieLengths));