// -=-=-=-=-=-=-=- logic statements -=-=-=-=-=-=-=-

// -------- if else statement
// if (condition) { code }

const number = +prompt("Enter your number:");

// ---- TASK: check if number is valid
if (!isNaN(number)) {

    if (number % 2 === 0) {
        console.log("Number is even!");
    }
    else {
        console.log("Number is odd!");
    }
}
else {
    console.warn("Your number is invalid!");
}

// ---- TASK: check your age
const age = +prompt("Enter your age:");

if (age >= 18) console.log("Grant Access!");
else {
    console.warn("Deny Access!");
    console.warn("Please wait until 18 years old!");
}

// ----- TASK: show weekday name by number
const weekday = +prompt("Enter current weekday (1-7):");

if (weekday === 1) console.log("Monday!");
else if (weekday === 2) console.log("Tuesday!");
else if (weekday === 3) console.log("Wednesday!");
else if (weekday === 4) console.log("Thursday!");
else if (weekday === 5) console.log("Friday!");
else if (weekday === 6) console.log("Saturday!");
else if (weekday === 7) console.log("Sunday!");
else console.error("Your weekday is invalid!");

// -------- switch
// syntax: switch(expression) 
//      case value1: code; break;
//      case value2: code; break;

// break: go out the statement (switch, loops)

switch (weekday) {
    case 1: case 2: case 3: case 4: case 5:
        console.log("I am working now!");
        break; // go out from the switch
    case 6: case 7:
        console.log("I am free!");
        break;
    default:
        console.error("Weekday must be in the range 1...7!");
}
// go here after break operator

switch (true) {
    case weekday < 1: console.error("Weekday can not be less than 1!"); break;
    case weekday > 7: console.error("Weekday can not be more than 7!"); break;
    default:
        console.log("Weekday value in the valid range!");
}

// logic conbinators: || (або) && (і)
const hours = +prompt("Enter hours: ");

// check range 0...23
if (hours >= 0 && hours <= 23)
    console.log("Hours is correct!");
else
    console.warn("Hours is incorrect!");

console.log("&& && && Result:");
console.log(hours > 0 && hours < 23 && hours != 12); // -20

console.log("|| || || Result:");
console.log(hours > 0 || hours < 23 || hours != 12); // -20

console.log(5 > 1 || 5 > 10); // true
console.log(5 > 1 && 5 > 10); // false

// return first true value
console.log("10" || "" || null || undefined); // return first true: null
// return first false value
console.log("10" && "false" && null && undefined); // return first false: null

// set default value
let email = prompt("Enter your email:");

// if (email == false)
//     email = "empty";

// or using || operator
email = email || "empty";

// set default value of email == false
console.log("Email is", email || "not entered");

//let result = hours < 8 && someFunction();

// --------- thernary operator
// syntax: condition ? true_value : false_value

if (5 > 2)
    console.log("Bigger");
else
    console.log("Smaller");

console.log(5 > 2 ? "Bigger" : "Smaller");
