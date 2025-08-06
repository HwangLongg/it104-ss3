function removeDuplicateChars(input: string): string {
    let result = "";
    let seen = new Set<string>();

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