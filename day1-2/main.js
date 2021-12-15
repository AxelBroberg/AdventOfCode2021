var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

console.log(textByLine)

var count = 0
for (let index = 0; index < textByLine.length; index++) {
    
    let sum1 = parseInt(textByLine[index]) + parseInt(textByLine[index+1]) + parseInt(textByLine[index+2])
    
    let sum2 = parseInt(textByLine[index+1]) + parseInt(textByLine[index+2]) + parseInt(textByLine[index+3])
    
    if(sum1 < sum2) count++
}

console.log(count)