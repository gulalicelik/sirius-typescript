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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Post = /** @class */ (function () {
    function Post(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    return Post;
}());
// const post1 : IPost = {
//     userId: 1,
//     id: 1,
//     title: "titasdasdle",
//     body: "basdasdody"
// }
//
// const post2 : Post = new Post(1,1,"title","body");
//
// console.log(post1)
// console.log(post2)
//
// const post2 : IPost = {
//     userId: 1,
//     id: 1,
//     title: "title",
//     body: "body"
// }
//
// const postArr : IPost[] = [post1,post2];
//
// console.log(postArr);
var PostService = /** @class */ (function () {
    function PostService() {
        this.convertToPosts = function (data) {
            return data.map(function (post) {
                return new Post(post.userId, post.id, post.title, post.body);
            });
        };
    }
    PostService.prototype.getPosts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, response, myJsonData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/posts')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        myJsonData = _a.sent();
                        data = this.convertToPosts(myJsonData);
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.getPostById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, myJsonData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        myJsonData = _a.sent();
                        data = this.convertToPosts(myJsonData);
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PostService;
}());
var postService = new PostService();
// postService.getPosts();
postService.getPostById(1);
