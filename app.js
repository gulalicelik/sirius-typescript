"use strict";
//install node js
// open project folder in terminal
// npm init -y
// npm install typescript -g
// tsc --init
// npm install @types/node
// npm install ts-node
Object.defineProperty(exports, "__esModule", { value: true });
// npx ts-node app.ts
//tsconfig.json
//{
//   "compilerOptions": {
//     "lib": ["es6"]
//   }
// }
var console = require("console");
console.log('Hello World!');
var num1 = 5;
var num2 = 10;
var firstname = "John";
num1 = 10;
// num2 = "veli"; // Error: Type 'string' is not assignable to type 'number'.
firstname = String(num2);
console.log(num1);
console.log(num2);
// data types
var isTrue = true;
var age = 25;
var firstasdname = "John";
var x = null;
isTrue = false;
// isTrue = 2;
// isTrue = "John";
// npx tsc app.ts -w // watch mode for typescript
// any type
var var1 = 5;
var1 = "John";
var1 = true;
// arrays
var arr = [1, 2, 3, 4, 5];
var arr2 = ["John", "Doe", "Jane"];
var arr3 = [1, "John", true];
//
var arr4 = [1, 2, 3, 4, 5];
var arr5 = ["John", "Doe", "Jane"];
var arr6 = [1, "John", true];
console.log(arr);
// ts tuple
var person = ["John", 25];
// person = [25, "John"]; // Error: Type 'number' is not assignable to type 'string'.
// ts functions
function calculateAvarage(vizeP, finalP) {
    return (vizeP * 0.4) + (finalP * 0.6);
}
// string
function greet(name) {
    return "Hello " + name;
}
function isEven(num) {
    return num % 2 === 0;
}
function getStudentInfo() {
    return ["John", "Doe", "25"];
}
function getStudentInfo2() {
    return ["John", "Doe", 25];
}
// void
function logMessage(message) {
    console.log(message);
}
var result = calculateAvarage(50, 70);
