//Креирај функција која како аргумент ќе содржи низа од броеви, целта на оваа функција е да ги инкрементира сите елементи од листа.
//
// Пример како треба да изгледа функцијата:
//
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
//
//
// For example:
//
// Input	Result
// 0, 1, 2, 3
// [ 1, 2, 3, 4 ]

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
