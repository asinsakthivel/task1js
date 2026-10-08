// 1. var — 10 Questions

// 1. Create a var variable called name and initialize it with your name. Print it.
var name = "Asin";
console.log(name);

// 2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);

// 3. Create a var variable called city, assign "Chennai", then reassign "Bangalore".
var city = "Chennai";
city  = "Bangalore";
console.log(city);

// 4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000.
var salary = 25000;
var salary = 35000;
console.log(salary);

// 5. Create a var variable, assign a value, reassign it, and redeclare it.
var value = 100;
value = 200;
var value = 300;
console.log(value);

// 6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);

// 7. Create a var variable called mark with 50, reassign it to 75.
var mark = 50;
mark = 75;
console.log(mark);

// 8. Create a var variable called company and redeclare it with another company name.
var company = "TCS";
var company = "Stackly";
console.log(company);

// 9. Create a var variable without assigning a value, then initialize it later.
var course;
course = "JavaScript";
console.log(course);

// 10. Create one var variable and change its value three times.
var number = 10;
number = 20;
var number = 30;
number = 40;
console.log(number);


// 2. let — 10 Questions

// 1. Create a let variable called age and initialize it with your age.
let age2 = 20;
console.log(age2);

// 2. Create a let variable called salary and reassign it.
let salary2 = 30000;
salary2 = 40000;
console.log(salary2);

// 3. Create a let variable called name and change it.
let name2 = "Asin";
name2 = "Naveen";
console.log(name2);

// 4. Change department from ECE to CSE.
let department2 = "ECE";
department2 = "CSE";
console.log(department2);

// 5. Create mark with 60 and reassign it to 90.
let mark2 = 60;
mark2 = 90;
console.log(mark2);

// 6. Declare a let variable without initialization.
let city2;
city2 = "Chennai";
console.log(city2);

// 7. Try to redeclare the same let variable.
// let testLet = 25;
// let testLet = 30;

// 8. Create a let city and reassign it two times.
let city3 = "Chennai";
city3 = "Bangalore";
city3 = "Coimbatore";
console.log(city3);

// 9. Create three different let variables.
let studentName = "Asin";
let studentAge = 20;
let studentCity = "Chennai";

console.log(studentName);
console.log(studentAge);
console.log(studentCity);

// 10. Initialize, reassign, and try to redeclare a let variable.
let salary3 = 30000;
console.log(salary3);

salary3 = 40000;
console.log(salary3);

// let salary3 = 50000;


// 3. const — 8 Questions

// 1. Create a const variable called age with value 25.
const age3 = 25;
console.log(age3);

// 2. Create a const variable called salary with value 50000.
const salary4 = 50000;
console.log(salary4);

// 3. Create a const variable called company with "Stackly".
const company2 = "Stackly";
console.log(company2);

// 4. Try to reassign a const variable.
// const testAge = 25;
// testAge = 30;

// 5. Try to redeclare a const variable.
// const testCompany = "Stackly";
// const testCompany = "TCS";

// 6. Create a const variable called college.
const college = "Poompuhar College, Melaiyur";
console.log(college);

// 7. Create three const variables for name, age, and department.
const constName = "Asin";
const constAge = 20;
const constDepartment = "CSE";

console.log(constName);
console.log(constAge);
console.log(constDepartment);

// 8. Use one var, one let, and one const variable.
var variableName = "Asin";
let variableAge = 20;
const variableCollege = "Poompuhar College";

console.log(variableName);
console.log(variableAge);
console.log(variableCollege);


// 4. Printing Statements — 7 Questions

// 1. Print your name using console.log().
console.log("Asin");

// 2. Create a variable containing your age.
let printAge = 20;
console.log(printAge);

// 3. Print the number 100.
console.log(100);

// 4. Create three variables and print their values.
let printName = "Asin";
let printCity = "Chennai";
let printCourse = "JavaScript";

console.log(printName);
console.log(printCity);
console.log(printCourse);

// 5. Create a variable called message.
let message1 = "Hello JavaScript";
console.log(message1);

// 6. Create a variable, print it, change it, and print again.
let changingValue = 10;
console.log(changingValue);

changingValue = 20;
console.log(changingValue);

// 7. Print name, age, and qualification.
console.log("Asin");
console.log(20);
console.log("Bachelor's Degree");


// 5. alert() — 5 Questions

// 1. Display "Welcome to JavaScript".
alert("Welcome to JavaScript");

// 2. Create userName and display it.
let userName = "Asin";
alert(userName);

// 3. Create userAge and display it.
let userAge = 20;
alert(userAge);

// 4. Create "Welcome Naveen".
let welcomeMessage = "Welcome Naveen";
alert(welcomeMessage);

// 5. Create qualification and display it.
let qualification = "Bachelor's Degree";
alert(qualification);


// 6. prompt() — 5 Questions

// 1. Ask the user for their name.
let promptName = prompt("What is your name?");
console.log(promptName);

// 2. Ask the user for their age.
let promptAge = prompt("How old are you?");
alert(promptAge);

// 3. Ask for qualification.
let promptQualification = prompt("What is your qualification?");
console.log(promptQualification);

// 4. Ask for name and show it in a popup.
let popupName = prompt("Enter your name");
alert(popupName);

// 5. Ask for age and print it.
let enteredAge = prompt("Enter your age");
console.log(enteredAge);


// 7. confirm() & document.writeln() — 3 Questions

// 1. Create a confirmation box.
let programmingAnswer = confirm("Do you know programming?");
console.log(programmingAnswer);

// 2. Display "Welcome to Batch 41".
let batchMessage = "Welcome to Batch 41";
document.writeln(batchMessage);

// 3. Ask "Do you want to continue?"
let continueAnswer = confirm("Do you want to continue?");
console.log(continueAnswer);


// 8. Console Methods — 2 Questions

// 1. Use console.log(), console.warn(), and console.error().
console.log("This is a normal message");
console.warn("This is a warning message");
console.error("This is an error message");

// 2. Use console.log(), console.warn(), console.error(), and console.clear().
console.log("Normal message");
console.warn("Warning message");
console.error("Error message");

// console.clear();