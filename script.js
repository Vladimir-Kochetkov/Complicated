"use strict";
const message = "   Строчный аргумент";
const lessonFour = function (variable) {
    variable.trim();
    if (typeof variable != "string") {
        console.log('В качестве аргумента передана не строка');
    } else if (variable.length < 30) {
        console.log(variable.trim());
    } else if (variable.length > 30) {
        console.log((variable.slice(0, 29)).trim() + '...');
    }
};
lessonFour(message);