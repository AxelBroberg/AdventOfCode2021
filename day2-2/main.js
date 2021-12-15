var fs = require('fs');
var text = fs.readFileSync("./input.txt", 'utf-8');
var textByLine = text.split('\r\n')

console.log(textByLine)

var x = 0; //horizontal
var depth = 0; //vertical
var aim = 0;

for (let index = 0; index < textByLine.length; index++) {
    var action = textByLine[index].split(' ')
    console.log(action[0])
    if(action[0] == 'forward') {
        x += parseInt(action[1])
        depth += parseInt(action[1])*aim
    } else if(action[0] == 'down') {
        aim += parseInt(action[1])
    } else if(action[0] == 'up') {
        aim -= parseInt(action[1])
    }
}
console.log(x * depth)