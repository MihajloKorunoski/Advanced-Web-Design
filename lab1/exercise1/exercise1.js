'use strict'

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    p1 = p1.split(", ")

    console.log(incrementItems(p1))

    rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function increment(i) {
    return Number(i) + 1;
}

function incrementItems(p1) { // Write this function
    return p1.map(i => increment(i));
}