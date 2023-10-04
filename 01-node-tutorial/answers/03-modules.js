const names = require('./04-names.js');
const sFunction = require('./05-utils.js'); // executed only when invoked
const alternative = require('./06-alternative-flavor.js');
require('./07-mind-grenade.js'); // executed automatically every time when the node runs
require('./08-os-module.js');
require('./09-path-module.js');


console.log(names.bob, 'from 04-names');
//alternative(names.bob); 
sFunction(); //from 05-utils
console.log(alternative.items.billy); // from 06-alternative-flavor
console.log(alternative.items.karen); // from 06-alternative-flavor

