// random-fruits-name external packages
const randomFruitsName = require('random-fruits-name');
// console.log(randomFruitsName('en'));


// name-to-imdb external packages
var nameToImdb = require("name-to-imdb");
nameToImdb("3 idiots", function(err, res, inf) { 
  console.log(res); // "tt0121955"
  // inf contains info on where we matched that name - e.g. metadata, or on imdb
  // and the meta object with all the available data
  console.log(inf);
})