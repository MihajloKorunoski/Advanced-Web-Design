//Дадена е пирамида која има n нивоа. Секое ниво на пирамидата е квадратно и се состои од m×m блокови. Креирајте функција која како влез прима два броја: n (бројот на нивоа на пирамидата) и m (страна на основниот квадрат на најдолното ниво), а како излез го дава вкупниот број на блокови од кои се состои пирамидата.
//
// Пример како треба да изгледа функцијата:
//
// howManyBlocks(1, 3) ➞ 9
//
// howManyBlocks(2, 3) ➞ 14
//
// howManyBlocks(3, 3) ➞ 19
//
// For example:
//
// Input	Result
// 1 3      9

'use strict'

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    let [n, m] = input.split(' ').map(Number);
    console.log(howManyBlocks(n, m));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function howManyBlocks(n, m) {
    let totalBlocks = 0;

    for (let i = 0; i < n; i++){
        totalBlocks += Math.pow(m-i,2)
    }
    return totalBlocks;
}
