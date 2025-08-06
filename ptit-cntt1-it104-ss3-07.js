"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicateChars(input) {
    let result = "";
    let seen = new Set();
    for (let char of input) {
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    return result;
}
let str1 = "tomatto";
let str2 = "hello world";
console.log(removeDuplicateChars(str1));
console.log(removeDuplicateChars(str2));
//# sourceMappingURL=ptit-cntt1-it104-ss3-07.js.map