var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

const amount1 = []
amount1[0] = 0
var gammaRate = '000000000000'
var epsilonRate = '000000000000'

rows = textByLine.length

for (let i = 0; i < rows; i++) {
    for (let x = 0; x < textByLine[i].length; x++) {
        if (amount1[x] == null) amount1[x] = 0
        if(textByLine[i][x] == '1') amount1[x] = (amount1[x] + 1)
    }
}

console.log(amount1)
for (let i = 0; i < amount1.length; i++) {
    if(amount1[i] > rows/2) gammaRate = setCharAt(gammaRate, i, '1')
    else epsilonRate = setCharAt(epsilonRate, i, '1')
}

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}