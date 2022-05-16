//task 1

function sayHello (name){
    if (name == 'Mark'){
    return 'Hi,Mark'
}
    return "Hello"
}

sayHello('Oleg')

//task2

    let numberOne = Number (prompt('Введите сторону треугольника!'));
    let numberTwo = Number (prompt('Введите сторону треугольника!'));
    console.log(`Длинна гипотенузы: ${Math.pow((Math.pow(numberOne, 2) + Math.pow(numberTwo, 2)), 1 / 2)}`);


//task 3

function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//task 4

function isEven (value) {
    if ( value % 2 === 0) {
    return 'true'
}
    return 'false'
}

isEven( value4)
isEven( value5)


// task 5
const deleteChars = function (str) {

    return str.slice(1, -1);

}
console.log(deleteChars('Hello'))

// task 6
const someFn = function (str) {

    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

}
console.log(someFn('javaScript'))

//task 7
const checkLetterCase = function (letter) {
    if (letter === letter.toUpperCase()) {
        return 'Оууу май, большая буква!';
    }
    return 'Нет уж, маленькие буквы - скучно'
}
console.log(checkLetterCase('a'))

// task 8
const concatenate = function () {

    const string1 = 'Hello ';
    const string2 = 'World';
    return string1 + string2
}
console.log(concatenate())

// task 9
const checkStringLength = function (str, numb) {
    if (str.length  > numb) {
        return 'String is too long'
    };
    return 'Hi';
}
console.log(checkStringLength('Hi',1))