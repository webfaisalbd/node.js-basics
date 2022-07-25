console.log("Local Module");

// import all object together
const s1 = require('./student');

// import single object from many
const { degree } = require('./teacher');

const { profession } = require('./professor')


console.log(s1.getName());
console.log(s1.getAge());
console.log(s1.cgpa);


console.log(degree());
console.log(profession());