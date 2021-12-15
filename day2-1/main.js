var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

console.log(textByLine)

var x = 0; //horizontal
var y = 0; //vertical



for (let index = 0; index < textByLine.length; index++) {
    var action = textByLine[index].split(' ')
    console.log(action[0])
    switch (action[0]) {
        case 'forward':
            y += parseInt(action[1])
            break;
        case 'down':
            x += parseInt(action[1])
            break;
        case 'up':
            x -= parseInt(action[1])
            break;
        default:
            break;
    }
}
console.log(x * y)