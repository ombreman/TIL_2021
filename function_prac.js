const { get } = require("mongoose");

// function declaration >> hoisting happens
function printCodeit(params) {
    console.log('codeit');
};

// function expression >> cannot approach before declaration
const printCodeit = function () {
    console.log('codeit');
}

// higher order function
function getPrintHi() {
    return function () {
        console.log('Hi!');
    };
};
getPrintHi()();
// or
const sayHi = getPrintHi();

sayHi();

// arrow function
const getTwice = function(number) {
    return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function() {
    console.log('button is clicked!');
});

// changed to arrow function
const getTwice = (number) => {
    return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
    console.log('button is clicked!');
});

// even shorter arrow function
const getTwice = number => number * 2; // brakets can go when return code is only one

console.log(getTwice(6));