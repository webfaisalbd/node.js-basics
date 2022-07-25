### node.js-basics

- front end + back end = full stack
- client side + server side + database

#### What is Node.js
- server environment; not a programming language
- runs on various platforms (Windows, Linux, Mac OS etc.)
- it's free

#### Why learn Node.js
- easy to learn
- it uses asynchronous programming. Which is different than PHP, ASP
- used for collecting form data
- Node.js can add, delete, modify data in your database

#### Environment setup
- Node.js software install in your computer
- Editor (VS Code or others)

#### Node version check
```javascript
node -version
or,
node -v
```

#### Node.js Modules
- Module is a set of functions. (linke as js libraries such as Math)
- 3 types of modules
1. Local Modules (own created modules)
2. Built in Modules (node.js own modules) - http, url, path, fs, os, events, stream, dns etc.  [No need to install].
[Built in Modules](https://www.w3schools.com/nodejs/ref_modules.asp)

3. External Modules (managed by npm)


#### Local Module

- student.js file
```javascript
const getName = () => {
    return "Ami faisal";
}

const getAge = () => {
    return "25";
} 

const cgpa = 3.79;

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;

module.exports = {
    getName,
    getAge,
    cgpa
}

```

- teacher.js file
```javascript
const subject = () => {
    return "CSE";
}

const degree = () => {
    return "PHD";
}


module.exports = {
    subject, degree
}
```

- professor.js file
```javascript
exports.profession = () => {
    return "Teaching";
}
```


- index.js file
```javascript
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
```
