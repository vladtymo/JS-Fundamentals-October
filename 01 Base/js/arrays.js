// -=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-
//let array = new Array();
let array = [];

let colors = ["red", "green", "blue", "black"];
const mixed = [120, null, "hello", true, [1, 2, 3], { id: 1002, title: "Super" }, () => { }];

colors[3] = "pink";
// all values between are undefined
colors[100] = "white";

console.log("[3]:", colors[3]); // "black"
console.log("[4]:", colors[4]); // undefined
console.log("[100]:", colors[100]); // white

console.log("Colors arr length: ", colors.length);

// access by index: 0>
console.log("Colors: ", colors);

colors[0] = "yellow";
console.log("First color: ", colors[0]);
console.log("Mixed arr length: ", mixed.length); // 6

console.log("Is Array: ", Array.isArray(colors));

// ------------ methods
colors.pop();           // remove last
colors.push("purple");  // insert last
colors.shift();         // remove first
colors.unshift("brown");// insert first

console.log("Colors: ", colors);

let numbers = [4, 60, 1, -1, 0, -3, 99, -4, 120, 1, -4, 44, -10];

console.log("Numbers:", numbers);

console.log("Index of 1: ", numbers.indexOf(1)); // 2, if not found: -1
console.log("Last Index of 1: ", numbers.lastIndexOf(1)); // 1

let firstHalf = numbers.slice(0, numbers.length / 2);
console.log("First Half:", firstHalf);

numbers[numbers.length - 1]; // last

numbers.splice(1, 3);
console.log("After splice:", numbers);

numbers.sort(); // lexicograph mode
console.log("Sorted Numbers:", numbers);

// comparison result: 
// 0 - element are equals
// <0 - 1st < 2st
// >0 - 1st > 2st
numbers.sort((a, b) => a - b);
console.log("Custom sort Numbers:", numbers);

numbers.fill(7, 1, 3);
console.log("Numbers:", numbers);

// return copy array with true values
console.log("Filtered: ", numbers.filter((x) => x < 0));

// return copy array with mapped values
console.log("Mapped:", numbers.map((x) => x > 0 ? x + '!' : x));

// we can use method chain: method1().method2()
console.log(numbers.slice(3, 7).map((x) => x * x));

console.log("Reversed:", numbers.reverse());

numbers = [4, 3, 6, 2, 10];

// result: 13
// current: 6
const summ = numbers.reduce((result, current) => result + current, 0);
console.log("Summ:", summ); // 25

// [r]ed + [g]reen + [b]lue = 'rgb'
const letters = colors.reduce((r, c) => r + c[0], '');
console.log("Letters:", letters); // 'rgb'

// ----- TASK: check array for dublications
// numbers = [5, 2, 10, 33, 33, 40];

// numbers.sort((a, b) => a - b);

// // sorted: [2, 2, 2, 5, 5, 10, 33, 40]

// let res = numbers.filter((x, i) => x === numbers[i + 1]);
// console.log(res);

// if (res.length === 0)
//     console.log("All elements are unique!");
// else
//     console.log("Array has dublications!");

// // ----- TASK: find max element in the array
// numbers = [4, 1, 0, -2, 10, 23, 17, 11];

// // max:  23 
// // curr: 17

// let max = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0]);
// console.log(max);
