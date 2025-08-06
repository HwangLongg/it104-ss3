"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToNumber(value) {
    const num = typeof value === "string" ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null) {
        return "gia tri k hop le de cong";
    }
    return num1 + num2;
}
function subtract(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null) {
        return "gia tri k hop le de tru";
    }
    return num1 - num2;
}
function multiply(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null) {
        return "gia tri k jop le de nhan";
    }
    return num1 * num2;
}
function divide(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 === null || num2 === null) {
        return "gia tri k hop le dechia";
    }
    if (num2 === 0) {
        return "";
    }
    return num1 / num2;
}
console.log("Cộng:", add("5", 10));
console.log("Trừ:", subtract("20", "7"));
console.log("Nhân:", multiply("abc", 2));
console.log("Chia:", divide("30", "0"));
//# sourceMappingURL=ptit-cntt1-it104-ss3-08.js.map