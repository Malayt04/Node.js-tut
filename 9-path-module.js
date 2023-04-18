const path=require('path');

console.log(path.sep);

const filePath=path.join('/content','subfolder','test.txt');

console.log(filePath);


//Gives name of the file 
const base=path.basename(filePath);
console.log(base);


//Complete address of your file 
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);