var a = 10;
a = 20;
var a = 30;

let b = 40;
b = 50;

const c = 60;

console.log(a);
console.log(b);
console.log(c);

let name = "Asin";
let age = 20;
let programming = "JavaScript";

console.log(name);
console.log(typeof name);

console.log(age);
console.log(typeof age);

console.log(programming);
console.log(typeof programming);

let fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let person = {
    name: "Asin",
    role: "Full Stack Developer",
    cgpa: 8.5
};

console.log(person.name);
console.log(person.role);
console.log(person.cgpa);

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert(userName);
console.log(userAge);

let num1 = 20;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

let x = 5;

console.log(x++);
console.log(x);
console.log(++x);

let p = 10;
let q = p--;
let r = --p;

console.log(p);
console.log(q);
console.log(r);

let value = 100;

value += 20;
console.log(value);

value -= 10;
console.log(value);

value *= 2;
console.log(value);

value /= 5;
console.log(value);

value %= 7;
console.log(value);

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");

let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);
console.log(!condition2);

let checkAge = 20;

let ageMessage = checkAge >= 18 ? "You are eligible" : "You are not eligible";

console.log(ageMessage);

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));

let inputNumber = prompt("Enter a number:");
inputNumber = Number(inputNumber);

console.log(inputNumber + 10);

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

let positiveNumber = Number(prompt("Enter a number:"));

if (positiveNumber > 0) {
    console.log("Positive number");
} else {
    console.log("Not a positive number");
}

let time = Number(prompt("Enter the time in 24-hour format:"));

if (time >= 0 && time < 5) {
    console.log("Night");
} else if (time >= 5 && time < 9) {
    console.log("Early Morning");
} else if (time >= 9 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 17 && time < 21) {
    console.log("Evening");
} else if (time >= 21 && time <= 23) {
    console.log("Night");
} else {
    console.log("Invalid time");
}

let eligibilityAge = 20;
let height = 170;
let weight = 65;

if (eligibilityAge >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Eligible");
        } else {
            console.log("Weight is not eligible");
        }
    } else {
        console.log("Height is not eligible");
    }
} else {
    console.log("Age is not eligible");
}

let trafficColor = prompt("Enter traffic light color:");

switch (trafficColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 10);

let text = "JavaScript";

for (let character of text) {
    console.log(character);
}

let students = ["Arun", "Asin", "Sabarish", "Kavya", "Rahul"];

for (let studentName of students) {
    console.log(studentName);
}

let student = {
    name: "Asin",
    role: "Full Stack Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber % secondNumber);

let numbers = [5, 12, 8, 20, 15];

for (let number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}

let eligibility = Number(prompt("Enter your age:"));

if (eligibility >= 18) {
    alert("You are eligible");
} else {
    alert("You are not eligible");
}

let operation = prompt(
    "Enter operation: addition, subtraction, multiplication, or division"
);

let first = Number(prompt("Enter first number:"));
let second = Number(prompt("Enter second number:"));

switch (operation.toLowerCase()) {
    case "addition":
        console.log(first + second);
        break;

    case "subtraction":
        console.log(first - second);
        break;

    case "multiplication":
        console.log(first * second);
        break;

    case "division":
        if (second !== 0) {
            console.log(first / second);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operation");
}