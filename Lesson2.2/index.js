// path module 
console.log(__dirname);
console.log(__filename);

const path = require('path');
// console.log(path);

const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + '/practice');
console.log(joinName);

const joinName2 = path.join(__dirname + '/../views');
console.log(joinName2);