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
