
const fs = require('fs');// to use that fs module

fs.writeFile('input.txt', "Hello Data", function (err) {

    if (err) {
        console.log(err);

    }
    else {
        console.log('write operation is completed \n');
    }
});

//sync operation
var data = fs.readFileSync('input.txt');
console.log("\n synchronous Reading..." + data.toString());
console.log("Program End");