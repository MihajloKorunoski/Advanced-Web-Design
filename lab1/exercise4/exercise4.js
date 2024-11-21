//Да се напише функција merge која ќе спојува 2 полиња во JavaScript. Функцијата треба да го врати резултантното поле.
//
// Спојувањето треба да се изврши како на примерот:
//
// 1, 2, 3, 4, 5
// 100, 200, 300, 400, 500
// [ [ '1', '100' ],
//   [ '2', '200' ],
//   [ '3', '300' ],
//   [ '4', '400' ],
//   [ '5', '500' ] ]
// Поради едноставност, претпоставете дека работите со низи од стрингови кои се задаваат на стандарден влез.
//
// For example:
//
// Input	Result
// 1, 2, 3, 4, 5
// 100, 200, 300, 400, 500
// [ [ '1', '100' ],
//   [ '2', '200' ],
//   [ '3', '300' ],
//   [ '4', '400' ],
//   [ '5', '500' ] ]

'use strict'

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
    rl.question('', (p2) => {
        p1 = p1.split(", ")
        p2 = p2.split(", ")

        console.log(merge(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

const merge = function(p1,p2){
    return p1.map((item,index) => [item, p2[index]])
} // Write this function
