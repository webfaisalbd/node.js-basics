// os 
// OS module provides information about the computer's operating system. 
const os = require('os');
const { totalmem, freemem } = require('os');

// console.log(os);
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(totalmem());
console.log(freemem());

