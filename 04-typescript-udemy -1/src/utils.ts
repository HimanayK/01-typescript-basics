/** @returns true of the string is palindrome */

export function palindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
