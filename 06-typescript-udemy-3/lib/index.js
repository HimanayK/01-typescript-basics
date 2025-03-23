"use strict";
// utils.ts file 
/** @returns true of the string is palindrome */
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = palindrome;
function palindrome(str) {
    return str === str.split('').reverse().join('');
}
//# sourceMappingURL=index.js.map