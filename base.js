// -------------- working with console --------------
// this is comment
console.log("This is log message!");
console.warn("This is warning message!");
console.error("This is error message!");

// [Ctrl + /] - comment/uncomment

// ------------- data types -------------

// create variable syntax: let name = value;
// name convension: camelCaseStyle

let email = "example@gmail.com";
let height = 100;
let weight = -33.56;
let bigInt = 1000000000n;
let letter = 'A';
let isValid = true;

let user = {
    login: "blablabla",
    password: 123
};

let colors = ["red", "green", "blue"];

colors[100]; // undefined

let emptyObj = null;
let undefinedObj = undefined; // bad practice

// typeof(exp) - return expression type
console.log("Email type: " + typeof(email));
console.log("Height type: " + typeof(height));
console.log("weight type: " + typeof(weight));
console.log("letter type: " + typeof(letter));
console.log("isValid type: " + typeof(isValid));
console.log("user type: " + typeof(user));
console.log("colors type: " + typeof(colors));
console.log("emptyObj type: " + typeof(emptyObj));
console.log("undefinedObj type: " + typeof(undefinedObj));

// ---- dynamic typing
email = "345.66";
email = 345.66;
console.log("Email type: " + typeof(email));

// ------------ browser dialogs ------------
// ----------- alert() - show message
//alert("Hello client!");

// ----------- prompt() - request data
let username = prompt("Enter your name:");

// string concatenation: str + str
console.log("Hello dear, " + username + "!");
// string interpolation: `...${expression}...`
console.log(`Hello dear, ${username}!`);

// convert string to number: 
// - Number(str)
// - +str
let year = +prompt("Enter current year:");

console.log(`Current year = ${year}!`);
console.log(`Next year = ${year + 1}!`);

// ----------- confirm() - request boolean data
let isContinue = confirm("Do you want to continue?");
console.log(`Continue: ${isContinue}`);

// using if else
if (isContinue == true) {
    console.log(`Continue: Yes`);
}
else {
    console.log(`Continue: No`);
}

// using ternary operator: (bool) ? value1 : value2
console.log(`Continue: ${isContinue ? "Yes" : "No"}`);