// boolean

// let isActive: boolean = true;
// console.log(isActive);
// let hasPermission = false;
// console.log(hasPermission); // TypeScript infers 'boolean' type

// Number 
// let decimal: number = 6;
// let hex: number = 0xf00d; // Hexadecimal
// let binary: number = 0b1010; // Binary
// let octal: number = 0o744; // Octal
// let float: number = 3.14; // Floating Point

// console.log(decimal, hex, binary, octal, float);

// String

let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`

// console.log(color);
// console.log(fullName);
// console.log(age);
// console.log(sentence);

// BigInt
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax

console.log(bigNumber);
console.log(hugeNumber);
