var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

const amount1 = []
amount1[0] = 0
var gammaRate = '000000000000'
var epsilonRate = '000000000000'
const correctIndexes = []
correctIndexes[0] = 0

rows = textByLine.length

for (let i = 0; i < rows; i++) {
    var nollor = []
    nollor[0] = 0
    var ettor = []
    ettor[0] = 0
    for (let x = 0; x < textByLine[i].length; x++) {
        if (textByLine[i][x] == '1') ettor.push(i)
        else if (textByLine[i][x] == '1') nollor.push(i)
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