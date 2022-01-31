"use strict";
let lang = 'en';

if (lang === 'ru') {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang === 'en') {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
    case 'ru':
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case 'en':
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
}

lang = [
    ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"],
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
];
console.log(lang[0]);
console.log(lang[1]);


let namePerson = prompt('Введите имя', 'Артем');

let socialStatus = (namePerson === "Артем") ? 'директор' :
    (namePerson === "Александр") ? 'преподаватель' :
        'студент';
console.log(socialStatus);   