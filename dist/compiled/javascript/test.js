"use strict";
/*
 Data Types
   Literal Types
*/
Object.defineProperty(exports, "__esModule", { value: true });
// type nums  =0 | 1 | -1
// let numbers : nums = 0
// function compare(num1: number, num2: number): nums{
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1
// let article : [number , string , boolean] = [11 , "one" , true]
// function error(message: string): never {
//   throw new Error(message);
// }
// error("Something wrong");
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running");
//   }
// }
const easy = 9;
const meduim = 6;
const hard = 3;
var kids;
(function (kids) {
    kids[kids["five"] = 25] = "five";
    kids[kids["seven"] = 20] = "seven";
    kids[kids["ten"] = 15] = "ten";
})(kids || (kids = {}));
var level;
(function (level) {
    level[level["kid"] = 25] = "kid";
    level[level["easy"] = 9] = "easy";
    level[level["meduim"] = 6] = "meduim";
    level[level["hard"] = 3] = "hard";
})(level || (level = {}));
function getAction(btns) {
    console.log(btns.one);
    console.log(btns.two);
    console.log(btns.three);
}
getAction({
    one: "string",
    two: 100,
    three: true
});
let myobject = { username: "Ali" };
let user = {
    id: 100,
    username: "ali",
    country: "egypt",
    sayhello() {
        return "${this.username}";
    }
};
//# sourceMappingURL=test.js.map