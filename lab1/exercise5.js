//Креирајте функција која ќе ја пресметува вкупната цена на купени производи во продавница. Функцијата треба да прима три аргументи:
//
// бројот на производи тип А (кои чинат 50 денари по парче),
// бројот на производи тип Б (кои чинат 30 денари по парче),
// бројот на производи тип В (кои чинат 20 денари по парче).
// Функцијата треба да ја врати вкупната цена која треба да се плати за сите купени производи.
//
// Пример како треба да изгледа функцијата:
// totalCost(3, 2, 5)  ➞ 290
// totalCost(0, 0, 10) ➞ 200
// totalCost(1, 1, 1)  ➞ 100
// For example:
//
// Input	Result
// 3, 2, 5
// 310

'use strict'

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    input = input.split(", ");
    console.log(totalCost(Number(input[0]), Number(input[1]), Number(input[2])));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function totalCost(n1,n2,n3) {
    return n1*50+n2*30+n3*20;
}
