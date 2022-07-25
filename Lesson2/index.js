const fs = require('fs');
// console.log(fs);

fs.writeFile("demo1.txt", "My name is Faisal Ahmed", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("data write successfull. ");
    }
})

fs.appendFile("demo1.txt", " And I am trying to learn node.js", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("data update successfull");
    }
})


fs.readFile("demo1.txt", 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
})


fs.rename("demo1.txt", "demo2.txt", (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("file rename successfull.");
    }
})

fs.unlink("demo2.txt", (e)=> {
    if(e){
        console.log(e);
    }
    else {
        console.log("file deleted successfully.");
    }
})


fs.exists("demo2.txt", (result)=> {
    if(result){
        console.log("file found");
    }
    else {
        console.log("file not found");
    }
})


// for syncronous : 
// - use syncronous fs library like fs.writeFileSync, fs.readFileSync etc.
// - remove callback function
