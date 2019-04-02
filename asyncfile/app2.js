const fs=require('fs');

let student =[
{
    name:'anu',
    age:5,
    gender:'female'
},
{
    name:'anuh',
    age:7,
    gender:'male'
},

]
let data = JSON.stringify( student );


fs.appendFile( 'student.json', data, (err)=>
{
    if(err)
     throw err;
     else
     console.log('data written into the file');
 
}


);

console.log('this is the end if program');
