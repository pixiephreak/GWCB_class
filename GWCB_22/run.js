allBands = require('./bands.js');

console.log(allBands);

for(band in allBands.bands){
  console.log(`${allBands.bands[band]} is part of the ${band} genre.`);
}

// (function functionName() {
//
// }());
