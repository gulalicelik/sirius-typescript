//install node js
// open project folder in terminal
// npm init -y
// npm install typescript -g
// tsc --init
// npm install @types/node
// npm install ts-node

// npx ts-node app.ts
//tsconfig.json
//{
//   "compilerOptions": {
//     "lib": ["es6"]
//   }
// }

import * as console from "console";

console.log('Hello World!');

let num1: number = 5;
let num2: number = 10;
let firstname: string = "John";

num1 = 10;
// num2 = "veli"; // Error: Type 'string' is not assignable to type 'number'.

firstname = String(num2);

console.log(num1);
console.log(num2);

// data types

let isTrue: boolean = true;

let age: number = 25;

let firstasdname: string = "John";

let x: null = null;
isTrue = false;
// isTrue = 2;
// isTrue = "John";

// npx tsc app.ts -w // watch mode for typescript

// any type
let var1:any = 5;
var1 = "John";
var1 = true;


// arrays

let arr: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["John", "Doe", "Jane"];
let arr3: any[] = [1, "John", true];
//
let arr4: Array<number> = [1, 2, 3, 4, 5];
let arr5: Array<string> = ["John", "Doe", "Jane"];
let arr6: Array<any> = [1, "John", true];

console.log(arr);


// ts tuple

var person: [string, number] = ["John", 25];
// person = [25, "John"]; // Error: Type 'number' is not assignable to type 'string'.

// ts functions

function calculateAvarage(vizeP: number, finalP: number): number {
    return (vizeP * 0.4) + (finalP * 0.6);
}

// string

function greet(name: string): string {
    return "Hello " + name;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function getStudentInfo(): string[] {
    return ["John", "Doe", "25"];
}

function getStudentInfo2(): [string, string, number] {
    return ["John", "Doe", 25];
}

// void
function logMessage(message: string): void {
    console.log(message);
}

let result: number = calculateAvarage(50, 70);
