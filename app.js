// //install node js
// // open project folder in terminal
// // npm init -y
// // npm install typescript -g
// // tsc --init
// // npm install @types/node
// // npm install ts-node
//
// // npx ts-node app.ts
// //tsconfig.json
// //{
// //   "compilerOptions": {
// //     "lib": ["es6"]
// //   }
// // }
//
// import * as console from "console";
//
// console.log('Hello World!');
//
// let num1: number = 5;
// let num2: number = 10;
// let firstname: string = "John";
//
// num1 = 10;
// // num2 = "veli"; // Error: Type 'string' is not assignable to type 'number'.
//
// firstname = String(num2);
//
// console.log(num1);
// console.log(num2);
//
// // data types
//
// let isTrue: boolean = true;
//
// let age: number = 25;
//
// let firstasdname: string = "John";
//
// let x: null = null;
// isTrue = false;
// // isTrue = 2;
// // isTrue = "John";
//
// // npx tsc app.ts -w // watch mode for typescript
//
// // any type
// let var1:any = 5;
// var1 = "John";
// var1 = true;
//
//
// // arrays
//
// let arr: number[] = [1, 2, 3, 4, 5];
// let arr2: string[] = ["John", "Doe", "Jane"];
// let arr3: any[] = [1, "John", true];
// //
// let arr4: Array<number> = [1, 2, 3, 4, 5];
// let arr5: Array<string> = ["John", "Doe", "Jane"];
// let arr6: Array<any> = [1, "John", true];
//
// console.log(arr);
//
//
// // ts tuple
//
// var person: [string, number] = ["John", 25];
// // person = [25, "John"]; // Error: Type 'number' is not assignable to type 'string'.
//
// // ts functions
// function calculateAvarage(vizeP: number, finalP: number): number {
//     return (vizeP * 0.4) + (finalP * 0.6);
// }
//
// // string
//
// function greet(name: string): string {
//     return "Hello " + name;
// }
//
// function isEven(num: number): boolean {
//     return num % 2 === 0;
// }
//
// function getStudentInfo(): string[] {
//     return ["John", "Doe", "25",];
// }
//
// function getStudentInfo2(): [string, string, number] {
//     return ["John", "Doe", 25];
// }
//
// // void
// function logMessage(message: string): void {
//     console.log(message);
// }
//
// let result: number = calculateAvarage(50, 70);
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes
var Person = /** @class */ (function () {
    // this nedir?
    // super nedir?
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.name;
    };
    Person.prototype.getInfo = function () {
        return "Name: " + this.name + " Age: " + this.age;
    };
    Person.prototype.getPersonAge = function (personName) {
        return " ".concat(personName, " is ").concat(this.age, " years old.");
    };
    return Person;
}());
var person1 = new Person("John", 25);
// console.log(person1.greet());
// console.log(person1.getInfo());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.studentNumber = studentNumber;
        return _this;
    }
    Student.prototype.greet = function () {
        return "Hello " + this.name + " " + this.studentNumber;
    };
    // override
    Student.prototype.getInfo = function () {
        return "Name: " + this.name + " Age: " + this.age + " Student Number: " + this.studentNumber;
    };
    return Student;
}(Person));
var student1 = new Student("John", 25, 12345);
console.log(Math.random());
// console.log(student1.getInfo());
console.log(student1.getPersonAge("Alican"));
// override ve overload nedir?
// polimorfizm nedir?
var Doctor = /** @class */ (function () {
    function Doctor(department, name, age) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    Doctor.prototype.greet = function () {
        return "Hello " + this.name + " " + this.department;
    };
    Doctor.prototype.getInfo = function () {
        return "Name: " + this.name + " Age: " + this.age;
    };
    return Doctor;
}());
var MyMathLib = /** @class */ (function () {
    function MyMathLib() {
    }
    MyMathLib.prototype.abs = function (x) {
        return Math.abs(x);
    };
    MyMathLib.prototype.acos = function (x) {
        return Math.acos(x);
    };
    MyMathLib.prototype.acosh = function (x) {
        return Math.acosh(x);
    };
    MyMathLib.prototype.asin = function (x) {
        return Math.asin(x);
    };
    MyMathLib.prototype.asinh = function (x) {
        return Math.asinh(x);
    };
    MyMathLib.prototype.atan = function (x) {
        return Math.atan(x);
    };
    MyMathLib.prototype.atan2 = function (y, x) {
        return Math.atan2(y, x);
    };
    MyMathLib.prototype.atanh = function (x) {
        return Math.atanh(x);
    };
    MyMathLib.prototype.cbrt = function (x) {
        return Math.cbrt(x);
    };
    MyMathLib.prototype.ceil = function (x) {
        return Math.ceil(x);
    };
    MyMathLib.prototype.clz32 = function (x) {
        return Math.clz32(x);
    };
    MyMathLib.prototype.cos = function (x) {
        return Math.cos(x);
    };
    MyMathLib.prototype.cosh = function (x) {
        return Math.cosh(x);
    };
    MyMathLib.prototype.exp = function (x) {
        return Math.exp(x);
    };
    MyMathLib.prototype.expm1 = function (x) {
        return Math.expm1(x);
    };
    MyMathLib.prototype.floor = function (x) {
        return Math.floor(x);
    };
    MyMathLib.prototype.fround = function (x) {
        return Math.fround(x);
    };
    MyMathLib.prototype.imul = function (a, b) {
        return Math.imul(a, b);
    };
    MyMathLib.prototype.log = function (x) {
        return Math.log(x);
    };
    MyMathLib.prototype.log1p = function (x) {
        return Math.log1p(x);
    };
    MyMathLib.prototype.log10 = function (x) {
        return Math.log10(x);
    };
    MyMathLib.prototype.log2 = function (x) {
        return Math.log2(x);
    };
    MyMathLib.prototype.max = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.max.apply(Math, values);
    };
    MyMathLib.prototype.min = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.min.apply(Math, values);
    };
    MyMathLib.prototype.pow = function (x, y) {
        return Math.pow(x, y);
    };
    MyMathLib.prototype.random = function () {
        return Math.random();
    };
    MyMathLib.prototype.round = function (x) {
        return Math.round(x);
    };
    MyMathLib.prototype.sign = function (x) {
        return Math.sign(x);
    };
    MyMathLib.prototype.sin = function (x) {
        return Math.sin(x);
    };
    MyMathLib.prototype.sinh = function (x) {
        return Math.sinh(x);
    };
    MyMathLib.prototype.sqrt = function (x) {
        return Math.sqrt(x);
    };
    MyMathLib.prototype.tan = function (x) {
        return Math.tan(x);
    };
    MyMathLib.prototype.tanh = function (x) {
        return Math.tanh(x);
    };
    MyMathLib.prototype.trunc = function (x) {
        return Math.trunc(x);
    };
    MyMathLib.prototype.hypot = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.hypot.apply(Math, values);
    };
    MyMathLib.prototype.generateRandomNumberByRange = function (range) {
        return Math.random() * range;
    };
    return MyMathLib;
}());
var myMath = new MyMathLib();
console.log(Math.random() * 300);
console.log(myMath.generateRandomNumberByRange(300));
