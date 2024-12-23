//Напишете функција dropUntil која прима 2 аргументи:
// array (Array): Низа од елементи
// predicate: Функција која ќе се извршува врз секој елемент.
// Функцијата треба да ги исфрли елементите од низа се додека не се исполни предикатот.
//
// пример:
// var users = [
//   { "user": "barney",  "active": false },
//   { "user": "fred",    "active": false },
//   { "user": "pebbles", "active": true }
// ]
//
// console.log(dropUntil(users, function(o) { return o.active; }) )
// // Output: [ { user: 'pebbles', active: true } ]
//
// For example:
//
// Test	Result
// var users = [
//   { "user": "barney",  "active": false },
//   { "user": "fred",    "active": false },
//   { "user": "pebbles", "active": true }
// ]
//
// console.log(dropUntil(users, function(o) { return o.active; }) )
// [ { user: 'pebbles', active: true } ]


function dropUntil(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array.slice(1);
        }
    }
    return [];
}

let users = [
    {"user": "barney", "active": false},
    {"user": "fred", "active": false},
    {"user": "pebbles", "active": true}
];

console.log(dropUntil(users, function (o) {
    return o.active;
}));