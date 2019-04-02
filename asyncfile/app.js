const fsobj = require('fs');

fsobj.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(" Problem is reading the file");
    }
    else {
        console.log(" Reading...")
    }

    fsobj.writeFile('write.txt', data, function (err) {


        if (err) {
            return console.log(err);
        }

    });

});

console.log("Program End");