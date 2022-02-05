"use strict";
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let body = document.querySelector('body');
for (let key of week) {
    body.innerHTML += `<p>${key}</p>`;
}
let p = document.querySelectorAll('p');
p[5].style.fontStyle = 'italic';
p[6].style.fontStyle = 'italic';
const now = new Date();
let day = now.getDay() - 1;
p[day].style.fontWeight = 'bold';
