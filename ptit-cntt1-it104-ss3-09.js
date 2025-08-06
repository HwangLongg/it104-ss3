"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToNumber(value) {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b === 0 ? "Không thể chia cho 0" : a / b;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0 || !Number.isInteger(n))
        return "Chỉ tính giai thừa số nguyên dương";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function handleClick(operator) {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultDiv = document.getElementById("result");
    const val1 = convertToNumber(input1.value);
    const val2 = convertToNumber(input2.value);
    let result;
    switch (operator) {
        case '+':
            if (val1 !== null && val2 !== null)
                result = add(val1, val2);
            else
                result = "Giá trị không hợp lệ";
            break;
        case '-':
            if (val1 !== null && val2 !== null)
                result = subtract(val1, val2);
            else
                result = "Giá trị không hợp lệ";
            break;
        case '*':
            if (val1 !== null && val2 !== null)
                result = multiply(val1, val2);
            else
                result = "Giá trị không hợp lệ";
            break;
        case '/':
            if (val1 !== null && val2 !== null)
                result = divide(val1, val2);
            else
                result = "Giá trị không hợp lệ";
            break;
        case '^':
            if (val1 !== null && val2 !== null)
                result = power(val1, val2);
            else
                result = "Giá trị không hợp lệ";
            break;
        case '√':
            if (val1 !== null && val2 !== null && val2 !== 0)
                result = sqrt(val1, val2);
            else
                result = "Giá trị không hợp lệ hoặc chia cho 0";
            break;
        case '!':
            if (val1 !== null)
                result = factorial(val1);
            else
                result = "Giá trị không hợp lệ";
            break;
        default:
            result = "Phép tính không hỗ trợ";
    }
    resultDiv.innerText = "Kết quả: " + result;
}
//# sourceMappingURL=ptit-cntt1-it104-ss3-09.js.map