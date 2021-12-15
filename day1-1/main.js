var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

console.log(textByLine)

var count = 0

for (let index = 0; index < textByLine.length; index++) {
    
    if (textByLine[index] < textByLine[index+1]) {
        count++
    }

}

console.log(count)