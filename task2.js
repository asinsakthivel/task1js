var num1 = 10;
num1 = 20;
console.log("Q1:", num1);

var num2 = 30;
var num2 = 50;
console.log("Q2:", num2);

let num3 = 100;
num3 = 200;
console.log("Q3:", num3);

const age = 21;
console.log("Q4:", age);

var a1 = 10;
let a2 = 20;
const a3 = 30;

console.log("Q5:");
console.log("var:", a1);
console.log("let:", a2);
console.log("const:", a3);

var name = "Asin";
let myAge = 21;
const city = "Mayiladuthurai";

console.log("Q6:");
console.log("Name:", name);
console.log("Age:", myAge);
console.log("City:", city);


let userName = prompt("Enter your name:");
alert(userName);
console.log("Q7:", userName);

let userAge = prompt("Enter your age:");
console.log("Q8:", userAge);

let knowsJavaScript = confirm("Do you know JavaScript?");
console.log("Q9:", knowsJavaScript);

let studentName = "Asin";
let studentAge = 21;
let isStudent = true;
let studentValue;

console.log("Q10:");
console.log(studentName, typeof studentName);
console.log(studentAge, typeof studentAge);
console.log(isStudent, typeof isStudent);
console.log(studentValue, typeof studentValue);

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("Q11:");
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let items = {
    fruits: ["Apple", "Mango", "Banana"],
    electronics: ["Mobile", "Laptop", "TV"],
    vegetable: "Carrot"
};

console.log("Q12:");
console.log(items.fruits);
console.log(items.electronics);
console.log(items.vegetable);


let number1 = 15;
let number2 = 4;

console.log("Q13:");
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

let remainder = 27 % 5;
console.log("Q14:", remainder);

let power = 3 ** 4;
console.log("Q15:", power);

let incrementNumber = 10;
++incrementNumber;
console.log("Q16:", incrementNumber);

let decrementNumber = 10;
--decrementNumber;
console.log("Q17:", decrementNumber);

let x = 5;
let y = x++;

console.log("Q18:");
console.log(x);
console.log(y);


let q19 = 4;

console.log("Q19:");
console.log(q19++);
console.log(q19);

let q20 = 4;

console.log("Q20:");
console.log(++q20);
console.log(q20);

let q21a = 8;
let q21b = q21a++;

console.log("Q21:");
console.log(q21a);
console.log(q21b);

let q22a = 8;
let q22b = ++q22a;

console.log("Q22:");
console.log(q22a);
console.log(q22b);

let q23a = 6;
let q23b = q23a--;

console.log("Q23:");
console.log(q23a);
console.log(q23b);

let q24a = 6;
let q24b = --q24a;

console.log("Q24:");
console.log(q24a);
console.log(q24b);

let q25 = 2;

q25++;
q25++;

console.log("Q25:", q25);

let q26 = 10;

--q26;
--q26;

console.log("Q26:", q26);

let q27 = 3;

q27 = q27++;

console.log("Q27:", q27);

let q28c = 4;
let q28d = q28c++;

console.log("Q28:");
console.log("c:", q28c);
console.log("d:", q28d);

let q29e = 5;
let q29f = --q29e;

console.log("Q29:");
console.log("e:", q29e);
console.log("f:", q29f);

let q30a = 5;
let q30b = q30a++;
let q30c = ++q30a;

console.log("Q30:");
console.log("a:", q30a);
console.log("b:", q30b);
console.log("c:", q30c);