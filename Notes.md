<!-- # for chapter name -->
<!-- ### for questions -->

# 🧿 Introduction

- TypeScript is JavaScript with added syntax for types.

- exercise : TypeScript allows developers to add types
  to JavaScript.

### What is TypeScript?

- TypeScript is a syntactic superset of JavaScript which adds **static typing**.
- It means that TypeScript adds syntax on top of JavaScript, allowing developers to add **types**.
- "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
- **What is the main benefit of using TypeScript over JavaScript?**
  - Static type-checking

### Why should I use TypeScript?

- JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

- In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

- TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the type don't match.

- For example, TS will report an error when passing a string into a function that expects a number.JS will not.

- <mark>TypeScript uses compile time type checking. Which means it checks if the specified type matcch **before** running the code, not **while** running the code.</mark>

### How do I use TypeScript?

- A common way to use TypeScript is to use the official TypeScript compiler, which transpile TypeScript code into JavaScript.

- Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

# 🪧TypeScript Compiler

- TypeScript is transpiled into JavaScript using a compiler.
- TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!

## Installing the Compiler

- TypeScript has an official compiler which can be installed through npm.

- Within your npm project, run the following command to install the compiler:

```bash
    npm install typescript --save-dev
```

- It will create a `package.json` file which has **typeScript** as **devDependence**

```json
// package.json
{
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```

and `package-lock.json` file and a `node_modules` directry.

- Now compiler is installed in the `node_modules` directory and can be run with `npx tsc`
- `tsc` stands for The TypeScript Compiler, current version : `Version 5.8.3`
- `npx` stands for Node Package executer it basically execute the packages(TypeScript in this case)

```bash
     npx tsc
```

- It would be give output similar to:

```bash
Version 4.5.5
tsc: The TypeScript Compiler - Version 4.5.5
```

followed by the list of all common commands.

#### --save-dev What it means?

- The `--save-dev` flag in `npm install typescript --save-dev` means that you're installing the package as a `development dependency`.
- It adds `typescript` to the `"devDependencies"` section of you `package.json` file.
- These dependencies are **only needed during development**, not in production

##### 📦 Difference: `dependencies` vs `devDependencies`

| Type              | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `dependencies`    | Needed in **production runtime** (e.g., React, Express, Lodash).           |
| `devDependencies` | Needed only in **development** (e.g., TypeScript, ESLint, Webpack, Babel). |

#### 🧠 Why TypeScript is a dev dependency?

Because TypeScript is a tool you use to write and compile your code during development. The final JS output (after compilation) is what runs in production — not TypeScript itself.

##### 💡 Without `--save-dev`

- If you just ran:

```bash
npm install typescript
```

Then `typescript` would go into `"dependencies"` — not ideal, since it's not needed at runtime.

### Configuring the Compiler

- By default the TypeScript compiler will print a help message when run in an empty project.
- The compiler can be configured using a `tsconfig.json` file.

-

```bash
  tsc --init
```

Creates a tsconfig.json with the recommended settings in the working directory

- Which should give you an output similar to:

```bash
Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json
```

- Here is an example of more things you could add to the tsconfig.json file:

```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

- You can open the file in an editor to add those options. This will configure the TypeScript compiler to transpile TypeScript files located in the `src/` directory of your project, into JavaScript files in the `build/` directory.
- Keep `.ts` files in src run `npx tsc` at you project not at `src` folder.

- This is one way to quickly get started with TypeScript. There are many other options available such as a `create-react-app` template, a `node starter project`, and a `webpack plugin`.

#### Error : $ tsc --init bash: tsc: command not found

- The error `bash: tsc: command not found` means that the TypeScript compiler (tsc) is not available globally in your terminal.

##### ✅ Option 1: Use npx (No need to install globally)

If you installed TypeScript locally using:

```bash
    npm install typescript --save-dev
```

Than you can run

```bash
    npx tsc --init
```

✅ This will generate a `tsconfig.json` file in your project root.

##### ✅ Option 2: Install TypeScript globally

If you want to use tsc from anywhere in your terminal, install it globally:

```bash
npm install -g typescript
```

Then you can run:

```bash
tsc --init
```

✅ Now tsc will be available as a global command.

#### 🧠 Local vs Global

| Installed How               | Run With  | Scope        |
| --------------------------- | --------- | ------------ |
| `npm install typescript`    | `npx tsc` | Project only |
| `npm install -g typescript` | `tsc`     | System-wide  |


# TypeScript Simple Types
- TypeScript enhances JavaScript by adding static types.

## JavaScript and TypeScript Primitives
- The most basic types in TypeScript are called **primitives**.
- These types form the building blocks of more complex types in your applications.
- TypeScript includes all JavaScript primitives plus additional type features.
- Here are the five primitive types :
  - Boolean 
  - Number
  - String
  - BigInt(ES2020+)
  - Symbol

### Boolean 
- Represent `true` or `false`.
- Used for flag, toggles, and conditions.

```ts
let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type
```

### Number
- Represents both integers and floating-point numbers.
- TypeScript uses the same number type for all numeric values.

```ts
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating Point

console.log(decimal);
// 0x : prefix for Hexadecimal
// 0b : prefix for Binary
// 0o : prefix for Octal
```

### String
- Represent text data.
- Can use single quotes `(')`, double quotes `(")`, or backticks **(`)** for template literals.

```ts
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullname} and I'll be ${age + 1} next year.`

console.log(color);
console.log(fullname);
console.log(age);
console.log(sentence);
```
### BigInt (ES2020+)
- Represents whole numbers larger than 253 - 1.
- Use the `n` suffix to create a bigint.

```ts
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax
```
- To use `BigInt` goto `tsconfig.json` ans change `"target": "es2016", ` to `    "target": "ES2020", `.

### Symbol
- Creaates unique identifiers.
- Useful for creating unique property keys and constants.

```ts
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
```