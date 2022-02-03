"use strict";
const arr = ['4', '54', '28', '48', '441', '14', '46'];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        result += ' ' + arr[i];
    }
}
console.log(result);



nextPrime:
for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
}

