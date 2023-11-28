// -=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-

// function declaration: function name(parameters) { ...body... }
// function expression: function (parameters) { ...body... }
// arrow function: (parameters) => ...body...

// naming: printSomething() getSmth() setSmth() changeSmth() checkSmth() ...
function showMessage() {
    const n = Math.round(Math.random() * new Date().getFullYear());
    console.log("I like JavaScript! Year: ", n);
}

// function invokation: name(parameter values);
showMessage();
showMessage();
showMessage();

console.log(Math.random());

// function to show a random value in range 0...10
function printRandomNumberTo10() {
    console.log(Math.floor(Math.random() * 11));
}

console.warn("Invoke func");
printRandomNumberInRange(4, 44);

// ----------- parameters -----------
// function parameters: name(param1, param2) { ... }

function printRandomNumberInRange(min, max) {
    console.log(Math.floor(min + Math.random() * (max - min) + 1));
}

// printRandomNumberTo10();
printRandomNumberInRange(10, 20);
printRandomNumberInRange(80, 100);
printRandomNumberInRange(200, 300);

// TASK: show count of value in the array
const arr = [3, 6, 1, 7, 3, 8, 3, 2, 3, 8];
const prices = [120.5, 10, 40, 10, 50, 10];

function showCount(numbers, value) {
    console.log("Value count: " + numbers.filter((i) => i === value).length);
}

showCount(arr, 3);      // 4
showCount(prices, 10);  // 3

// ----------- return -----------
// return operator: ends function and return value from it
function mult(a, b) {
    return a + b;
    console.log("Ignored"); // ignored
}

function getRandomNumberInRange(min = 0, max = 100) {
    return Math.floor(min + Math.random() * (max - min) + 1);
}
console.log("Random value: " + getRandomNumberInRange());

// initialize array with random value (10...40)
for (let i = 0; i < prices.length; i++) {

    prices[i] = getRandomNumberInRange(10, 40);
}
console.log("Prices:", prices);

console.log("Random value: " + getRandomNumberInRange(30, 50)); // 30...50
console.log("Random value: " + getRandomNumberInRange(3));      // 3...100
console.log("Random value: " + getRandomNumberInRange());       // 0...100

// ----------- hoisting: declaring variables / funciton before using them
console.log(salary); // undefined
var salary = 1200;
console.log(salary); // 1200

// ----------- callback functions -----------
// 1 - function declaration
function increment(x) {
    return x + 1;
}
// function stepin(x) {
//     return x * x;
// }

function changeArray(array, action) { // action - callback function

    for (let i = 0; i < array.length; i++)
        array[i] = action(array[i]);
}

let numbers = [4, 2, 5, -7, 10, 33];
console.log("Original: ", numbers);

changeArray(numbers, increment);
console.log("Incremented: ", numbers);

// 2 - function expression (anonymous function)
changeArray(numbers, function (x) { return x * x; });
console.log("Stepin: ", numbers);

// 3 - arrow function
changeArray(numbers, (x) => x * -1);
console.log("Negative: ", numbers);

// ----- ways to create a function
// 1 - function declaration
function getIncrement(x) { return x + 1; }

// 2 - function expression
let func = function (a, b) { console.log("Summ: ", a + b); }
func(3, 5);

const getNegative = function (x) { return -x; }

// ----- ways to put callback function
// 1 - using function name
changeArray(numbers, getIncrement);
// 2 - using anonymous functions 
changeArray(numbers, function (x) { return Math.abs(x); });
// 3 - using arrow function (ES6)
changeArray(numbers, (x) => Math.abs(x));

console.log("Changed array:", numbers);

function initiArray(arr, generate) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = generate();
    }
}

//initiArray(arr, () => Math.random(10) + 3);

function game(callback) {
    for (let i = 0; i < 10; i++) {
        const value = getRandomNumberInRange(0, 10);

        if (value > 7) {
            callback();
        }
    }
}

game(() => console.log("Uraaaa!"));
game(() => alert("Great!"));
game(() => console.warn("Celebrating!"));

console.log("Init array:", numbers);

// ----------- recursive functions -----------
function getFactorial(value) {
    if (value == 1) return 1; // close function
    return getFactorial(value - 1) * value;
}

console.log(getFactorial(3)); // !3 = 6
console.log(getFactorial(5)); // !5 = 1 * 2 * 3 * 4 * 5 = 120

// ----------- closure -----------

function test1() {
    // create data
    let a = 10;
    let b = 20;

    return function () {
        ++a;
        console.log(`a = ${a} | b = ${b}`);
        ++b;
    }
}

const show = test1();

show(); // 11 | 20
show(); // 12 | 21
show(); // 13 | 22

// TASK: create a closing function to get the next Fibonacci number
function getFunction() {
    // ----- outer area -----

    // create variables
    let a = 0;
    let b = 1;

    return function () {
        // ----- inner area -----
        console.log(a);
        let temp = a;
        a = b;
        b += temp;
    };
}

// get closure function
const showNext = getFunction();

for (let i = 0; i < 10; i++) {
    showNext(); // invoke
}
