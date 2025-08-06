function convertToNumber(value: string): number | null {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | string {
    return b === 0 ? "Không thể chia cho 0" : a / b;
}

function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
    return Math.pow(base, 1 / root);
}

function factorial(n: number): number | string {
    if (n < 0 || !Number.isInteger(n)) return "Chỉ tính giai thừa số nguyên dương";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function handleClick(operator: string): void {
    const input1 = document.getElementById("input1") as HTMLInputElement;
    const input2 = document.getElementById("input2") as HTMLInputElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    const val1 = convertToNumber(input1.value);
    const val2 = convertToNumber(input2.value);

    let result: number | string;

    switch (operator) {
        case '+':
            if (val1 !== null && val2 !== null) result = add(val1, val2);
            else result = "Giá trị không hợp lệ";
            break;
        case '-':
            if (val1 !== null && val2 !== null) result = subtract(val1, val2);
            else result = "Giá trị không hợp lệ";
            break;
        case '*':
            if (val1 !== null && val2 !== null) result = multiply(val1, val2);
            else result = "Giá trị không hợp lệ";
            break;
        case '/':
            if (val1 !== null && val2 !== null) result = divide(val1, val2);
            else result = "Giá trị không hợp lệ";
            break;
        case '^':
            if (val1 !== null && val2 !== null) result = power(val1, val2);
            else result = "Giá trị không hợp lệ";
            break;
        case '√':
            if (val1 !== null && val2 !== null && val2 !== 0) result = sqrt(val1, val2);
            else result = "Giá trị không hợp lệ hoặc chia cho 0";
            break;
        case '!':
            if (val1 !== null) result = factorial(val1);
            else result = "Giá trị không hợp lệ";
            break;
        default:
            result = "Phép tính không hỗ trợ";
    }

    resultDiv.innerText = "Kết quả: " + result;
}
