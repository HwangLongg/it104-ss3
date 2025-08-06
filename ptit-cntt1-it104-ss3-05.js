"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalizeFirstLetter(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let firstName = "john";
let lastName = "doe";
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
//# sourceMappingURL=ptit-cntt1-it104-ss3-05.js.map