//1.path
const path=require("path");

console.log(path.dirname(__filename));
console.log(path.extname("myfile.php"));

const filename = path.basename('C:\WINDOWS\System32');
console.log(filename);

console.log('Directory name:', __dirname);
console.log('File name:', __filename);

//2. moment
const moment=require("moment");

console.log(moment().format("DD-MM-YYYY HH-MM"));
console.log(moment().format("dddd"));
console.log(moment());


// 3. fs
const fs = require('fs');  

let mydata = "hello man-21 class";

fs.writeFile("test.txt", mydata, function(err){
    if (err) throw err;
    console.log("File saved successfully.");

    fs.readFile("test.txt", "utf8", function(err, data){
        if (err) throw err;
        console.log("File content:", data);
    });
});