// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one job
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS


// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(object) {
  object.name = 'coder';
}
const gil = { name: 'gil' };
changeName(gil);
console.log(gil);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'gil');


// 5. Local scope - "You can only see outside from inside but inside from outside"
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage); // error
}
printMessage();
console.log(message);


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad case
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good case
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}


// First-clss function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  print();
}
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function
// always anonymous

// original
const simplePrint = function () {
  console.log('simplePrint!');
}
// simple way
const simplePrint = () => console.log('simplePrint!');

// original
const add = function (a, b) {
  return a + b;
};

// simple way
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => { // if you have to use brakets
  return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})(); // IIFE

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));