"use strict";
let num = 266219;
let arr = String(num).split('');

let result = arr.reduce((item, current) =>
    item * current, 1);
console.log(result);

let degree = result ** 3;
console.log(degree);
console.log(String(degree).slice(0, 2));