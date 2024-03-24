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
// class MyMathLib implements  Math{
//
// E: number;
//     LN2: number;
//     LN10: number;
//     LOG2E: number;
//     LOG10E: number;
//     PI: number;
//     SQRT1_2: number;
//     SQRT2: number;
//     abs(x: number): number {
//         return Math.abs(x);
//     }
//     acos(x: number): number {
//         return Math.acos(x);
//     }
//     acosh(x: number): number {
//         return Math.acosh(x);
//     }
//     asin(x: number): number {
//         return Math.asin(x);
//     }
//     asinh(x: number): number {
//         return Math.asinh(x);
//     }
//     atan(x: number): number {
//         return Math.atan(x);
//     }
//     atan2(y: number, x: number): number {
//         return Math.atan2(y, x);
//     }
//     atanh(x: number): number {
//         return Math.atanh(x);
//     }
//     cbrt(x: number): number {
//         return Math.cbrt(x);
//     }
//     ceil(x: number): number {
//         return Math.ceil(x);
//     }
//     clz32(x: number): number {
//         return Math.clz32(x);
//     }
//     cos(x: number): number {
//         return Math.cos(x);
//     }
//     cosh(x: number): number {
//         return Math.cosh(x);
//     }
//     exp(x: number): number {
//         return Math.exp(x);
//     }
//     expm1(x: number): number {
//         return Math.expm1(x);
//     }
//     floor(x: number): number {
//         return Math.floor(x);
//     }
//     fround(x: number): number {
//         return Math.fround(x);
//     }
//
//
//     imul(a: number, b: number): number {
//         return Math.imul(a, b);
//     }
//     log(x: number): number {
//         return Math.log(x);
//     }
//     log1p(x: number): number {
//         return Math.log1p(x);
//     }
//     log10(x: number): number {
//         return Math.log10(x);
//     }
//     log2(x: number): number {
//         return Math.log2(x);
//     }
//     max(...values: number[]): number {
//         return Math.max(...values);
//     }
//     min(...values: number[]): number {
//         return Math.min(...values);
//     }
//     pow(x: number, y: number): number {
//         return Math.pow(x, y);
//     }
//     random(): number {
//         return Math.random();
//     }
//     round(x: number): number {
//         return Math.round(x);
//     }
//     sign(x: number): number {
//         return Math.sign(x);
//     }
//     sin(x: number): number {
//         return Math.sin(x);
//     }
//     sinh(x: number): number {
//         return Math.sinh(x);
//     }
//     sqrt(x: number): number {
//         return Math.sqrt(x);
//     }
//     tan(x: number): number {
//         return Math.tan(x);
//     }
//     tanh(x: number): number {
//         return Math.tanh(x);
//     }
//     trunc(x: number): number {
//         return Math.trunc(x);
//     }
//     hypot(...values): number {
//         return Math.hypot(...values);
//     }
//
//     generateRandomNumberByRange(range:number): number {
//         return Math.random()*range;
//     }
//
//
//
// }
// let myMath : MyMathLib = new MyMathLib();
// console.log(Math.random()*300);
// console.log(myMath.generateRandomNumberByRange(300));
// TASKS json placeholder api kullanarak typescript ile get request yapınız.
// post için bir interface oluşturunuz.
// postService adında bir class oluşturunuz.
