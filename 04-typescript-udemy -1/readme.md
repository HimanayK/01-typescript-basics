# Setup 
1. check versions
 - node -v or --version
 - npm -v
 - npx --version
2. npm init -y
3. npm install typescript OR npm i typescript
4. npx tsc --init --rootdir src --outdir lib 
5.create src in root directory; inside create index.ts file
6. npx tsc --watch
- settings.json -> "auto-close-tag.disableOnLanguage": [ "typescript", "typescriptreact"]

---

## Primitive Types 
```ts
let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = 24n;
```

---

## Instance Types
```ts
let regexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A firsr in first out collection */
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
    this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

let queue: Queue<number> = new Queue();

```

---

## Array -> 
Array<number> | number[]
```ts
let array: number[] = [1, 2, 3]
```

## Tuple ->
 A fixed length array; members of an array must match the type annotation
```ts
let tuple: [number, number] = [1, 2]
tuple = [5]  // Error: must be 2 items
tuple = [5, 4, 5] // Error: must be 2 items
tuple = ['elite', 1324] //Error: must be number type

```

---

## Object Types ->
```ts
let center: {x: number, y: number} = {
    x: 0,
    y: 0
}

let unit: {x: number, y: number} = {
    x: 1,
    y: 1
}
```

---

## Type Alias ->
Type Alias is a way of defining custom type  using `type` keyword. It can be used for primitives or complex types. It enhance code readability with custom name and reusability of code.

```ts
type Point = {
    x: number,
    y: number
}

let center: Point = {
    x: 0,
    y: 0
}

let unit: Point = {
    x: 1,
    y: 1
}

```
---

## const declarations
```ts
type Point = {
    x: number,
    y: number
}

const center: Point = {
    x: 0,
    y: 0
}

point = {x: 1, y: 2}  // Error - const cannot redeclared

// All other behaviors are same as `let`
point.x = 123;
point.y = 353;

```

---

## functions 
```ts
// paramaters and return type is number
type Add = (a: number, b: number) => number;   // short hand syntax for function type

let add: Add = (a, b) => {
    return a + b;
}

add(4, 5);

// example 2. void -> represents no return
function log(message: string): void {
    console.log('Log:', message);
}

//sum using reduce method
function sum (...values: number[]): number {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2);  // 3
sum(1, 2, 3);  // 6

```

---

## Structural Typing -> extra information is okay
```ts
type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};

let point2D: Point2D = {x: 0, y: 0};
let point3D: Point3D = {x: 9, y: 10, z: 20};

/** Extra info is okay */
point2D = point3D;  // pont3D have all properties of point2D
function takesPoint2D(point: Point2D) {/**.... */}
takePoint2D(point3D);

// Above one is called duck typing.

/** Error: missing info */
point3D = point2D;     //point2D doesn't have z
function takesPoint2D(point: Point2D) {/**.... */}
takePoint2D(point2D);  // Error: compile time error
```

---

## Classes
- classes are templates for creating object. Or a blueprint of an object.
- protected and private accessible within class and its subclasses
- contructor function used to create instance of the class
```ts
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeter: number): void {
        console.log(`${this.name} moved ${distanceInMeter}m.`);
    }
}

let cat = new Animal('Cat');
cat.move(10);
cat.name = 'Dog'  // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.


// private & protected are accessible in its subclases: Bird is sublcass of Animal
class Bird extends Animal {
    fly(distanceInMeter: number): void {
        console.log(`${this.name} flew ${distanceInMeter}m.`);
    }
}

let bird = new Bird('Parrot');

```

## Generics <> 
- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
- It helps to create a component that can work over a variety of types rather than a single one.
***generic*** helps to capture the type of arguments and is used to denote what is being returned. 
- type variable, a special kind of variable that works on types rather than values.

```ts
/** A FIFO (First in First Out) collection */

class Queue<T> {
    data: T[] = [];
    push(item: T) { 

        this.data.push(item); 
    }
    pop(): T | undefined { 
        return this.data.shift();
    }
}

const queue = new Queue<number>();   // accepts type of numbers only
queue.push(123);
queue.push(432);

```

## Special Types: `any` and `unknown`
- super types means that all types of variables can be assigned to something that is `any`, and the same is true for `unknown`
- `any` allows you to completely bypass the TypeScript type system without having to worry about TypeScript adding its type checks
- `unknown` more type safe version of `any` because it offers type checking.
 - allowing you to add sanity checks before using it. So if you want to use it as a string, you need to add an explicit JavaScript runtime check, for example, using the typeof operator.


```ts
let exampleAny: any;
let exampleUnknown: unknown;

// any 
exampleAny = 123;
exampleAny = 'Hello';

// unknown
exampleUnknown = 123;
exampleUnknown = 'World';

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;


// unknown 
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}

if (typeof exampleUnknown == 'boolean') {
   let unknownSetBool: boolean = exampleUnknown;
}
```

## 15. Type Assertions: `as` 
- We can use to tell the compiler what the type of a variable is without having to do any of the type inference or type checks
-  In below example with the string type assertion, we are telling the TypeScript compiler that Dear compiler, trust me, I know this is a string.

```ts
let hello = load();

const trimmed = (hello as string).trim();
```

The ideal approach, of course, is to use proper type annotations or runtime JavaScript type checks
```ts
let hello = load();

if (typeof hello === 'string')
const trimmed = (hello as string).trim();
```

## 16. Type Casting
- a common way to convert a string to a number is using the plus operator before the string.
- Now this type of type manipulation within JavaScript documentation is called type coercion.
```ts

let leet;

// Later
leet = '1337';

// Use as number
const number = +leet;

console.log(number === 1337)   // true
console.log(number);   // 1337
```

## 17. Modules

```ts
// utils.ts file 
/** @returns true of the string is palindrome */

export function palindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
```
```ts
// index.ts file

import { palindrome } from "./utils";
             
console.log(palindrome('madam')); // true
console.log(palindrome('madan')); // false

               |OR|
             
import * as utils from "./utils";               

console.log(utils.palindrome('madam')); // true
console.log(utils.palindrome('madan')); // false

```
## 18. Type Declarations  - `npm i @types/node`
- The standard way of accessing environment variables within NodeJS is using Process.env - comes from process.d.ts which is type of package we isntalled i.e @type / node

 ```ts
console.log('Logged in user: ', process.env.USER);

```

-  NodeJS runtime also provides a number of built in modules as well, and one of them is for file system known as FS. Now, in order to use FS or any of the other modules, we simply import it within our code and use it as you normally would within JavaScript
 ```ts
import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello world');

```

-  third party packages that you might find on NPM
  - simply installing them in order to use them in your code base
  - There are, however, some packages that require an external type definition, and one such example is express.
   - npm i express
   - npm i @types/express  /** the express module we import is not found because it is not described anywhere in TypeScript. Similar to what we did for Node, we can actually simply install the type definitions for Express. Now, once the installation is complete, you can see that the errors within our go away. */


   ```ts
   import express from 'express';
   const app = express();
   app.get('/', function (req, res) {
    res.send('Hello World');
   });
   app.listen(3000, () => {
    console.log('Server started');
   });

  ```

  ## 19. Creating an NPM Package -> 06-typescript-udemy-3

  ## 20. Async Await

```ts

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const mainAsync = async () => {
    await delay(1000);
    console.log('1s');

    await delay(1000);
    console.log('2s');

    await delay(1000);
    console.log('3s');
}
```

## 22. Lexical this
- **Lexical scope** determines variable accessibility based on where a function is declared, not where it is called.
- There are two ways to think about the this keyword in JavaScript.
  1. One way is the calling context. See below example
```ts

class Person {
    private _age: number
    constructor(_age: number) {
        this._age = _age;
    }
    growOld() {
        return this._age++;
    }
    age() {
        return this._age;
    }
}

const person = new Person(29);
person.growOld();
console.log('age: ', person.age())  // 30
```
 2. The other way is lexically scoped. See below example growOld method - using arrow function, we can store the method in variable and then call it
 ```ts
class Person {
    private _age: number
    constructor(_age: number) {
        this._age = _age;
    }
    growOld = () => {
        return this._age++;
    }
    age() {
        return this._age;
    }
}

const person = new Person(29);
const grow = person.growOld;
grow();
setTimeout(() => console.log('age: ', person.age()), 2000);   // 30

 ```
---

 ## 23. readonly modifier
 - Prefix readonly is used to make a property as read-only 
 - the read only modifier in TypeScript is a compile time only feature used for compile time error checking and does not require runtime JavaScript support.
- we can combine read only with other class member access modifiers for example public.

```ts
class Animal {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const sheep = new Animal('sheep');
console.log(sheep.name);  // Allow
sheep.name = 'wolf' //  Cannot assign to 'name' because it is a read-only property.
```

## Union Types `|`
- A union type describes a value that can be one of several types. We use the vertical bar ( | ) to separate each type.
-  Such as when a property would be string or number

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId('Hello');
printId(32);

function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }
  printId('hello');
  printId(32);

// Example 2
type Input = 
 |string[] 
 | string;

  function welcomePeople(x: Input) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));    // Hello, Hi and Bye
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);  // Welcome lone traveler Himani
    }
  }

  welcomePeople(['Hi', 'Bye'])
  welcomePeople('Himani')
```
## 25. Literal Types
- Allow to specify exact values for variables, function parameters or properties

```ts
type Direction = 'North' | 'East' | 'South' | 'West';
let direction: Direction;

direction = 'Western';   // Type '"Western"' is not assignable to type 'Direction'.
direction = 'West';

// Example 2.

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
    return (Math.floor(Math.random() * (6 - 1 + 1)) + 1) as DiceValue;
}

// compile time error - This comparison appears to be unintentional because the types 'DiceValue' and '7' have no overlap.
if (rollDice === 7) {
    throw new Error('Not possible!');
}
```

## 26. Type Narrowing: `typeof`, `instanceof`, `in`
- `typeof`, `instanceof`, `in` called ***type guards***
- reducing the type of a variable from a broader type to a more specific type within a certain code block
- In simple words, narrow a variable to a specific type

```ts
function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding).join('1') + value;
    }

    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected number or string, got ${padding}.`);
}

console.log(padLeft('Hello world', 10));   // 111111111Hello world
padLeft('Hello world', '----');     //----Hello world
padLeft('Hello world', true);     // Argument of type 'boolean' is not assignable 


// Example 2: `instanceof`
class Cat {
    meow() {
        console.log('meow');
    }
}

class Dog {
    bark() {
        console.log('woof');
    }
}

type Animal = Cat | Dog;    //literal type

function speak(animal: Animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }


  if ( animal instanceof Dog) {
    animal.bark();
  }
}  

let cat = new Cat();
console.log(speak(cat));
```
>> 💡 Now, the proper way to determine if a given object is an instance of a class is using the JavaScript ***instanceof*** operator.

```ts
// Example 3: `in`

type Square = {
    size: number,
};
type Rectangle = {
    width: number,
    height: number,
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }


if ('width' in shape) {
    return shape.width * shape.height;
   }
}

area({size: 2});     // 4
area({width: 2, height: 3});   // 6
```
> we can use the JavaScript **in** operator to determine if a particular property exists on the pattern object and TypeScript will automatically infer that if this property is present on the object, then it must be of that particular type

---

## 27. Discriminated Union
- A common use of literal types in TypeScript is to have a union of types which have a single shared field.

- This single shared field can be used to discriminate between the members of a union. See below example with common property -> kind

```ts
type Circle = {
    kind: 'circle',
    radius: number,
};

type Square = {
    kind: 'square',
    size: number,
};
type Rectangle = {
    kind: 'rectangle
    width: number,
    height: number,
};

type Shape = 
| Circle
| Square 
| Rectangle;


function area(shape: Shape) {
        if (shape.kind === 'circle') {
        return Math.PI * (shape.radius ** 2);
    }

    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }


if (shape.kind === 'rectangle') {
    return shape.width * shape.height;
   }
}

area({size: 2});     // 4
area({width: 2, height: 3});   // 6



// Example2 :

type ValidateSuccess = {
    isValid: true,
    validateValue: string
}

type ValidateFailure = {
     isValid: false,
    errorReason: string
}

type ValidationResult = ValidateSuccess | ValidateFailure;

function logResult(result: ValidationResult) {
    if (result.isValid) {
        console.log('Success, validated value: ', result.validateValue);
    }

    if (result.isValid === false) {
        console.log('Failure, error reason: ', result.errorReason);
    }
}

logResult({isValid: false, errorReason: 'Slow server'})   // Failure, error reason:  Slow server

```

## 28. Class Parameter Properties - remove dublication
```ts
class Person {
    constructor(
        public name: string, 
        public age: number
        ) {}
}

const adam = new Person('Adam', 12000);
console.log(adam.name, adam.age);
```
## 29. Strict Compiler Option

## Null vs. Undefined
- ***null:*** if something is currently unavailable, the runtime returns null
- ***undefined:***  hasn't been initialized, the runtime normally returns undefined

```ts
let notDefined: undefined = undefined;
let notPresent: null = null;

class Point {
    x:  number;
    y: number;
}

const center = new Point();
center.x = 1;

console.log(center.y);   // undefined
```

```ts
function logVowels(value: string) {
   console.log(value.match([aeiou]/gi));
}

  logVowels('hello')  // ['e', 'o']
  logVowels('sky')  // null

```

```ts
console.log(null == null);   // true (of course)
console.log(undefined == undefined); // true (of course)

console.log(undefined == null)  // true

console.log(false == null)    //false
console.log(0 == null)        // false¨
console.log('' == null);      // false

const result = someBooleanOrNullOrUndefined();
if (result == null) {
    console.log('Null or Undefined', result); // null | undefined
}

if ( result != null) {
    console.log('Boolean', result);  // true | false
}
```

```ts
function decorate(value: string | null | undefined) {
    if (value == null) {
        return value;
    }

    return `--${value.trim(--)}--`;
}

console.log(decorate('Hello'));             // --Hello--
console.log(decorate('Hello World  '));    // --Hello World --
console.log(decorate(null));               // null
console.log(decorate(undefined));          // undefined

```

## 31. Intersection Types   `&`
- allows you to combine the multiple types into one.
- This allows you to add together existing types to get a single type that has all the features you need.

```ts
type Person = {
    name: string,
}
type Email = {
    email: string,
}
type Phone = 
{
    phone: string,
}

function contact (details: Person & Email & Phone) {
    console.log(`Dear ${details.name}, I hope you received email at ${details.email}, we will call you shortly at ${details.phone}`);
}

contact({name: 'Himani', email: 'himanay.k@gmail', phone: '1234657'});




// For readabilty we can write above function as - 
type ContactDetails = Person & Email & Phone;
      // |OR|
type ContactDetails = 
& Person 
& Email 
& Phone;      


function contact (details: ContactDetials) {
    console.log(`Dear ${details.name}, I hope you received email at ${details.email}, we will call you shortly at ${details.phone}`);
}

contact({
    name: 'Himani', 
    email: 'himanay.k@gmail', 
    phone: '1234657'
    });
```

## 32. Optional Modifier
- allow to specify that a property may or may not be present on an object of that type
- If we try to use the optional property that is not present in the object, it returns undefined automatically, else you can explicitly initialize with undefined value

```ts
type Person = {
    name: string,
    email: string,
    phone?: string,     // hover -> (property) phone?: string | undefined
};

const bruce: Person = {
    name: 'Bruce',
    email: 'bruce@gmail',
    phone: '911',
};

const albred: Person = {
    name: 'Alberd',
    email: 'alberd@gmail',
    //phone: undefined    // provide explicit undefined value
};

console.log(albred.phone);   // undefined  | in case of alberd:  
console.log(bruce.phone);    // 911  in bruce case 
```

```ts
// Now, because we haven't provided any default value for these x and Y members of type number, nor have we initialized them in the class constructor. TypeScript is going to highlight this as a compiler error.

class Point {
    x: number;   // Property 'x' has no initializer and is not definitely assigned in the constructor.
    y: number;   // Property 'x' has no initializer and is not definitely assigned in the constructor.
}

const point = new Point();


// to resolve this, see below example
```

```ts
// Now we can fix that by initializing these values in the class constructor or we can provide an initializer inline.Alternatively, now that we understand optional members, we can remove the initializer and simply mark these members as being optional.
class Point {
    x?: number | null;
    y?: number;
}

const point = new Point();   // create instance of Point class

console.log(point.x);   // undefined

point.x = 0;
point.x = undefined;
point.x = null;    //Type 'null' is not assignable to type 'number | undefined'.

// if you want to add null value for any member, add it as explicit annotation, for example using union type, added in x above
```


## 33. Non-null Assertion Operator `!`
- TypeScript does not do deep code flow analysis, therefore we use non null assertion Operator.

```ts
type Point = {
    x: number,
    y: number,
};
let point: Point;
function initialize() {
    point = {x: 0, y: 0};
}

initialize();
console.log('After Initialization', point!.x, point!.y);

// to avoide non-null assertion see below example
```

```ts

type Point = {
    x: number,
    y: number,
};

function initialize(): Point {
    return {x: 0, y: 0};
}

const point = initialize();
console.log('After Initialization', point.x, point.y);
```

```ts
type Person = {
    name: string,
    email?: string | null | undefined,
};

function sendEmail(email: string) {
    console.log('Send email to', email);
}

function ensureContactable(person: Person) {
    if ( person.email == null) throw new Error (`Person ${person.name} is not contactable`);
}

function contact(person: Person) {
    ensureContactable(person);
    sendEmail(person.email!);
}

 // to avoid non-null  assertion, see below example

type Person = {
    name: string,
    email?: string | null | undefined,
};

function sendEmail(email: string) {
    console.log('Send email to', email);
}


function contact(person: Person) {
    if ( person.email == null) throw new Error (`Person ${person.name} is not contactable`);
    sendEmail(person.email!);
}


```

## 34. Interface
- Interfaces are similar to type aliases , except they only apply to object types.
- Uses extends keyword to use the exisiting interface properties in the new one.

```ts
// using alias type
type Point2D = {
    x: number,
    y: number,
};

type Point3D = Point2D & {
    z: number,
};

export const point: Point3D = {
    x: 0,
    y: 0,
    z: 0,
};


// using interface
interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  z: number;
}

export const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

```

## 35. Interface Declaration Merging
- TypeScript interfaces support a feature called declaration merging.
- An example use case of that would be something like the NodeJS framework called Express.
- The base request type, supported by Express, has a few properties,for example, the body property.
- Now, within our application code, when we handle an express request, we will have access to any of the properties that are declared on the request type. For example, we have access to this body property.
- Now declaration merging allows a middleware, for example, a Json middleware to add additional properties to the request interface.
- TypeScript is going to merge the two declarations of the interface into a single type that has both of these properties.
- So in our code, simply by importing the Json middleware, you will get access to the Json property on instances of the request interface.
- So if you are working with an API that requires such seamless structural extension, you will have to use an interface.
Declaration.

```ts
// Express Base
export interface Request {
    body: any;
}

// Express JSON
export interface Request {
    json: any;
}

// Our App 
function handleRequest(req: Request) {
    req.body;
    req.json;
}

```

## 36. Types Vs. Interface
-And you can see that the body of the ***interface*** has a 1 to 1 correspondence with what we are assigning

- when creating the ***type alias***, now a great thing about type aliases is that anything you put in a type position can be put as an assignmentfor a type alias. In fact, TypeScript even offers a refactoring that takes something in a type position and extracts it out to a type alias.
- So if you wanted, you can break out the onchange handler into a named type.
- Similarly, you can create a type alias from primitive types like - string and reuse it in the onchange handler.
- And you can even use the type alias for the union of text and email literals.
- ***interfaces*** must have a body. They do not support these shorthand functions, syntax or the ability to create interfaces from primitive

types.

```ts

// interface
export interface {
    type: 'text' | 'email',
    value: string,
    onChange: (newValue: string) => void,
}

// tpye alias


type InputOnChange = (newValue: InputValue) => void;
type InputValue = string;
type InputType = 'text' | 'email';

export type InputProps = {
    type: InputType,
    value: InputValue,
    onChange: InputOnChange,
}


```
***type***
- Unions  `|`
- Interections (&)
- Primitives
- Shorthand Functions
- Advanced Type Functions

***Interface***
- Declaration Merging
- Familarity (extends)


## 37. Never type
- ***never*** never type represents the type of values that never occur. 
- Specifically, never is the return type for functions that never return and never is the type of variables under type guards that are never true.

```ts
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}
```


```ts
type Circle = {
    kind: 'circle',
    radius: number,
};

type Square = {
    kind: 'square',
    size: number,
};
type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number,
};

type Shape = 
| Circle
| Square 
| Rectangle;


function area(s: Shape) {
     if (s.kind === 'circle') {
      return Math.PI * (s.radius ** 2);
    } else if (s.kind === 'square') {
      return s.size * s.size;
    } else if (s.kind === 'rectangle') {
      return s.width * s.height;
   }
   const _ensureAllCasesAreHandled: never = s;
   return _ensureAllCasesAreHandled;
}

area({kind: 'circle', radius: 2})

```
---
---

# ADVANCED -----------------------------------------------------------

## 38. implements keyword
-  ***implements*** keyword is used to ensure that a class conforms to a particular interface 
```ts
type Animal = {
    name: string,
    voice(): string,
};

function log(animal: Animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat implements Animal {
    constructor(public name: string) { }
    voice() {return 'meow'; };
}

class Dog implements Animal {
    constructor(public name: string) { }
    voice() { return 'woof'; };
}

log(new Cat('catiee'));
log(new Dog('Tobby'));

```

## 39. Definite Assignment Assertion   `!`
- It tells the typescript that the variable is assigned with a value if typescript is unable to determine on its own.
- The definite assignment assertion is a feature that allows a ! to be placed after instance property and variable declarations to relay to TypeScript that a variable is indeed assigned for all intents and purposes, even if TypeScript’s analyses cannot detect so.

```ts
// here below  you can see typescript unable to determine that variable is initialized because the variable is not directly initialized and TypeScript does not do deep code flow analysis

let dice: number;

function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}

rollDice();
console.log('Current Dice Value', dice);  // Variable 'dice' is used before being assigned

rollDice();
console.log('Current Dice Value', dice); // Variable 'dice' is used before being assigned



// the above compile error we can resolve by using Definite Assignment Assertion

let dice!: number;

function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}

rollDice();
console.log('Current Dice Value', dice);  

rollDice();
console.log('Current Dice Value', dice); 



// Example 2:
class Point {
    x!: number;
    y!: number;
    constructor() {
        this.moveRandom();
    }
    // Utility method
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}

```


```ts
// With definite assignment assertions, we can assert that x is really assigned by appending an ! to its declaration:

// Notice the '!'
let x!: number;
initialize();
// No error!
console.log(x + x);
function initialize() {
  x = 10;
}

/**In a sense, the definite assignment assertion operator is the dual of the `non-null assertion operator` (in which expressions are post-fixed with a !), which we could also have used in the example. */

let x: number;
initialize();
// No error!
console.log(x! + x!);
function initialize() {
    x = 10;
}

```
>> In our example, we knew that all uses of x would be initialized so it makes more sense to use ***definite assignment assertions*** than ***non-null assertions***.
>> Difference - 
>>> ***definite assignment assertions*** - used in declaration time
>>> ***non-null assertions*** - expressions are post-fixed with a ! to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact.

---

## 40. User Defined Type Guards  `is`
- function return annotation:  `paramater is type` like  `shape as Square`
- A user defined type card is simply a function that returns a boolean value and is annotated in the form of `paramater is type`. Example `shape as Square`
- in terms of type inference, these user defined type guards behave exactly the same as the built in type guards offered by JavaScript, for example, the `in` operator.

```ts
type Square = {
    size: number,
};
type Rectangle = {
    width: number,
    height: number,
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
    return 'size' in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
    return 'size' in shape;
}

function area(shape: Shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }

    const _ensure: never = shape;
    return _ensure;
}

```

## 41. Assertion Function 
- An assertion function is a function that throws an error if a given condition is not met.
-  they are small functions which raise errors early when your variables don't match up to what you expect.
- return annotation `asserts condition` says that whatever gets passed into the condition parameter must be true if the assert returns

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg);
  }
}
```

```ts

//basic Assertion Function example
function assertString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected a string");
  }
}

function greet(name: unknown) {
  assertString(name);
  console.log(name.toUpperCase()); // TypeScript knows name is a string here
}

greet("John"); // JOHN
greet(42); // Will throw errors

// Output:
// JOHN
// Executed JavaScript Failed.
// Expected a string

```

> Above Example Explanation 
>> Here, assertStringtakes an unknown value and checks if the value is a string. If the value is not a string, it will throw an error. The asserts value is string return type to tell TypeScript that if the function does not throw, value must be a string.

>>After executing through assertString, TypeScript understands that the value is guaranteed to be a string.

>> Why Not Just Use typeof Check? 🤔
>> While the typeof check ensures at runtime that value is a string (or throws an error), TypeScript's static type system does not infer that on its own. Without asserts value is string, TypeScript does not narrow the type of value after the function call.

```ts
// another example
type Person = {
    name: string,
    dateOfBirth?: string,
};

function assert(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error (message);
}

function assertDate(value: unknown): asserts value is string {
    if (typeof value === 'string') return;
    else throw new TypeError('Value is not a Date');
}

const mayBePerson: Person = {
    name: 'Himani',
    dateOfBirth: '04 March 2024',
}


assert(mayBePerson != null, 'Could not load Person');
console.log('Name: ', mayBePerson.name);

assertDate(mayBePerson.dateOfBirth);
console.log('Date of Birth: ', mayBePerson.dateOfBirth);
```

## 42. Function Overloading
- Function overloading allows us to define multiple function signatures for a single function name with different parameter types or return types.

```ts
//Example 1:
function reverse(stringOrStringArray: string): string;  // function singature
function reverse(stringOrStringArray: string[]): string[];  // function singature


function reverse(stringOrStringArray: string | string []) {
    if (typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

const hello = reverse('hello');  //'olleh'
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']);  // ['o', 'l', 'l', 'e', 'h']


//Example 2:
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(2000, 1, 1)  // 1 Jan 2000
const epoch = makeDate(0)  // 1 Jun 1970



```

## 43. Call Signatures
- call signatures define the parameter types and return types for function-like objects, enabling the creation of callable entities with additional properties . 
- Allow objects to be invoked as functions while possessing properties.

```ts
// SYNTAX
type MyCallableObject = {
    (parameter1: Type1, parameter2: Type2): ReturnType; // Call signature
    propertyName: PropertyType; // Additional property
};
```
> Parameters:
>  - **MyCallableObject:** The name of the type alias for the callable object.
>  - **(parameter1: Type1, parameter2: Type2):** Defines the parameters and their types for the callable aspect.
>  - **ReturnType:** Specifies the return type of the callable function.
>  - **propertyName:** PropertyType: An example of an additional property within the object.

```ts
// Basic Example 
type GreetingFunction = {
    (name: string): string; // Call signature
    description: string;    // Additional property
};

const greet: GreetingFunction = (name: string) => {
    return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

console.log(greet("Alice"));          
console.log(greet.description);    
```
> - GreetingFunction defines a callable object that takes a string and returns a string.
> - The greet function implements this call signature and includes an additional description property.

```ts
// Example 2:
type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string,
};

const add: Add = (a: number, b: number, c?: number) => {
    return  a + b + (c != null ? c : 0);
};

add.debugName = 'Addition Function'


// Example 3:
type PointCreator = {
    new(x: number, y: number): { x: number, y: number }
};

const Point: PointCreator = class {
    constructor(public x: number, public y: number ) { }
}

new Point(4, 5)




```

## 44. Abstract Class
- Blueprint for other classes
- Abstract class cannot be instantiated directly.
- It is used as base class for other classes without having to implement all the members.
- abstract method must be implemented in the derived class

```ts
abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log('Executing:', this.commandLine());
    }
}

class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}

class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

new Command();     // Error: Cannot create an instance of an abstract class.

```

## 45. Index Signature
- index signatures allow you to define object types with dynamic keys, where the keys can be of a specific type, and the corresponding values can be of another type.

***SYNTAX***
```ts
type MyObject = {
    [key: KeyType]: ValueType;
};
```

```ts

type Person = {
    displayName: string,
    email: string,
};

type PersonDictonary = {
    [username: string]: Person | undefined,
    jane: Person,
}

const persons: PersonDictonary = {
    jane: {displayName: 'Jane Doe', email: 'jane@example.com'},
};


persons['john'] = {displayName: 'John Doe', email: 'john@example.com'};

console.log(persons);
/** OUTPUT
 {
  jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
  john: { displayName: 'John Doe', email: 'john@example.com' }
}
 */
console.log(persons['john']);  //{ displayName: 'John Doe', email: 'joh
// n@example.com' }
delete persons['john'];

const result = persons['missing'];
console.log(result, result.email);   // Error 'result' is possibly 'undefined'.


```
## 46. Readonly Arrays and Tuples

```ts
// readonly doesn't change the orginal array which is start passed as parameter
function reverseSorted(input: readonly number[]): number[] {
    return input.slice().sort().reverse();
}

const start = [1,2,3,5,4];
const result = reverseSorted(start);

console.log(result);  // [5, 4, 3, 2, 1];
console.log(start); // [1, 2, 3, 4, 5]


//---------------------------------------------------------//
type Neat = readonly number[];
type Long = ReadonlyArray<number>;
//---------------------------------------------------------//



//EXAMPLE 2. Tuple - array with fixed length

type Point = readonly [number, number];

function move(point: Point, x: number, y: number): Point {
    return [point[0] +x, point[1] + y];
}

const point: Point = [0, 0];
const moved = move(point, 10, 10);

console.log(moved); // [10, 10]
console.log(point); // [0, 0]


```

## 47. Double Assetion
```ts
type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };
type Person = { name: string, email: string};

let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person = { name: 'Himani', email: 'himani.k@' };

point2 = point3;
point3 = point2  // Error: Property 'z' is missing in type 'Point2D' but required in type 'Point3D'.
point3 = point2 as Point3D   // Ok: I trust you

person = point3; // Error
point3 = person // Error
point3 = person as Point3D  // Error: I don't trust your enough
point3 = person as unknown as Point3D  // Ok: I doubly trust you 
```

## 48. const Assertion: `as const`
- tells TypeScript to treat a variable as a literal type and to infer the most specific type possible.
- Moreover, the variable becomes read-only, preventing any future changes to both the variable’s value and its type. 

```ts
const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'singing'],
} as const;

dave = {
    name: 'grohl',
    role: 'singer',
    skills: ['drumming', 'singing'],
};     // Error: Cannot assign to 'dave' because it is a constant

dave.name = 'raki';   // Error: Cannot assign to 'name' because it is a read-only property.


// Example 2
function layout(setting: {
    align: 'left' | 'center' | 'rigth',
    padding: number,
}) {
    console.log('Performing layout:', settings);
}

const example = {
    align: 'left' as const,
    padding: 0
};

layout(example);

```


## 49. this parameter
- 

```ts
function double(this: {value: number}) {
    this.value = this.value * 2;
}

const valid = {
    value: 10,
    double,
};

valid.double();

console.log(valid.value);  // 20



```

## 50. Generic Constraints
- In addition to returning all the members from OBJ, we can add an additional member called FullName of Type String.
- Now the purpose of the Add fullname function is actually to generate a full name property by using the OBJ first name and the obj last name.
- At this point, TypeScript is complaining that it does not know what is intended by OBJ firstname and object last name as these members are not declared anywhere. In order to access these members from the object of type T, we have to declare that the past in OBJ must conform to a particular structure and that is done by using a generic constraint. Here we are saying that type T must have all the members that are present in the type name fields.

```ts

//  NameFields used as Generic Constraint 
type NameFields = {firstName: string, lastName: string };
function addFullName<T extends NameFields>(obj: T): T & { fullName: string} {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`,
    };
}

const john = addFullName({
    email: 'john@gmail.com',
    firstName: 'John',
    lastName: 'Doe'
});

console.log(john.email); // john@gmail.com
console.log(john.fullName); // John Doe

const jane = addFullName({firstName: 'Jane', lastName: 'Austen'});
```

## 51. Dealing with Temporal Uncertainty
- Once you've done a type check on a particular variable store, the reference to that particular variable in a new one and TypeScript will automatically infer it to have that restricted type. So for the first example, it will automatically infer suffix local to have the restricted type of type string, and therefore you can use it as a string perfectly fine anywhere within this particular conditional block.
```ts
let suffix: string | null = getSuffix();
if (suffix != null) {
    const suffixLocal = suffix;
    let exampleOne: string = 'jane' + suffixLocal.toUpperCase();

    ['jane', 'john'].forEach(name => {
        let exampleTwo: string  = name + suffixLocal.toUpperCase();
    });
}

let example: string | null = forExample();
if (example != null) {
    const exampleLocal = example;
    setTimeout(() => {
        console.log(exampleLocal.toUpperCase())
    }); 
}
```

## 52. typeof type Operator
- TypeScript provides the typeof type operator to generate a type from any variable
- This type will be the same as whatever TypeScript inferred for the  variable from which you generated the type.

```ts
const center = {
    x: 0,
    y: 0,
    z: 0,
};

// Later 
const unit: typeof center = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
}


// Real world example of json response
const personResponse = {
    "name": "john",
    "email": "john@gmail.com",
    "firstName": "john",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
    console.log('Full name': `${person.firstName}`);
}

```

## 53. Lookup Types 
- The syntax for looking up the type of a particular member is similar to the syntax of looking up a member from a JavaScript object.
- 

```ts 
export type SubmitRequest = {
    transactionId: string,
    personal: {
      title: string,
      driverFirstName: string,
      driverMiddleName: string,
      driverLastName: string,
      email: string,
      phone: string,
      previousAliases: {
        firstName: string,
        middleName: string,
        lastName: string,
      }[],
      gender: string,
      dob: string,
      birthCountry: string,
    },
    driver: {
      licenceNumber: string,
      expiryDate: string,
      hasLicenceForMin6Months: boolean,
      hasTerritoryLicence: boolean,
      territoryLicenceStates?: string[],
      hasDriverAccreditation: boolean,
      driverAccreditationNumber?: string,
      vehicleClasses: string[],
      tandc: true,
    },
    consent: {
      understandInformation: boolean,
      informationTrue: boolean,
      informationConsidered: boolean,
      medicalVicRoadsPoliceCheckConsent: boolean,
      consentToDisclosing: boolean,
      indemnifyAgainstLiability: boolean,
      acicCheckConsent: boolean,
      childrenCheckConsent: boolean,
      personalInfoCheckConsent: boolean,
      trafficOffences: boolean,
      assessAcicCheckConsent: boolean,
      criminalOffences: boolean,
      licenceCancelledSuspended: boolean,
      sexOffendersReporting: boolean,
      ausWorkRights: boolean,
      additionalInformation: string,
    },
    payment: {
      creditCardToken: string,
    }
  };


  // UI

  export function getPayment(): SubmitRequest['payment'] {
    return {
        creditCardToken: '12457ubfbakmcv@';
    }
  }


  // you can also create type annotation and then use it in return type
  type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0];   // [0] represents the type of items in the array

  export function getAliasRequest(): PreviousAliasRequest {
    return {
    firstName: 'Himani',
    middleName: 'Khajuria',
    lastName: 'Khajuria'
    }
  }
```

## 54. keyof type operator
- The `keyof` type operator takes a type as input and returns a union of the keys from that type.

```ts
type Person = {
    name: string,
    age: number,
    location: string
};

const john: Person = {
    name: 'Himani',
    age: 40,
    location: 'Stockholm'
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}

const age = logGet(john, 'age');  // 40

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
    console.log('Setting:', key, value);
    obj[key] = value;
}

logSet(john, 'age', 36);
```

## 55. Conditional Types
- Conditional types in TypeScript allow you to create conditional logic functions within the type system.
```ts
export type TypeName<T> = 
T extends string ? 'string' :
T extends number ? 'number' :
T extends boolean ? 'boolean' :
T extends undefined ? 'undefined' : 
T extends symbol ? 'symbol' :
T extends bigint ? 'bigint' : 
T extends Function ? 'function' : 
T extends null ? 'null' : 'object';

function typeName<T>(t: T): TypeName<T> {
    if (t === null) return 'null' as TypeName<T>;
    return typeof t as TypeName<T>;
}
  
  const str = typeName('hello world');
  const num = typeName(123);
  const bool = typeName(true);
  const undef = typeName(undefined);
  const sym = typeName(Symbol('star'));
  const big = typeName(24n);
  const func = typeName(function () { });
  const obj = typeName(null);
  ```

  ## 56. Conditional Types with Unions and never
  - When I see no empty string or null, I just go step by step and think If T is a string, it gets mapped to string. If T is null, it gets mapped to never, so no empty string or null will be just string.

```ts
/**
 Exclude null and undefined from T
 */

 export type NoEmpty<T> = T extends null | undefined ? never : T;

 type Example = NoEmpty<string | null>
 // expanded the type Example for understanding
 type Expanded0 = NoEmpty<string> | NoEmpty<null>;
 type Expanded1 = 
 (string extends null | undefined ? never : string)
 | (null extends null | undefined ? never : string);

 type Expanded2 = string | never;
 
 // in simple term, we says
 type Result = string;

```

## 57. `infer` keyword and `ReturnType<T>`
- infer keyword can be thought of as a way to create variables within the function.

```ts
type IsArray<T> = 
T extends Array<infer Member>
? 'array'
: 'other';

type WithArray = IsArray<string[]>;
type WithNotArray = IsArray<number>;

type UnboxArray<T> =
T extends Array<infer Member>
? Member
: T;

type UnboxedStringArray = UnboxArray<string[]>;
type UnboxedNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;

```

- So the inputs of the type function are types, and the outputs of the type function are types. Of course, the variables will also be types.
-  now if you ever end up in a situation where the input of one function depends upon the output of another function, you can actually generate the type on the fly.And if the output of the first function ever changes, you get a nice compiler error from TypeScript
```ts
export function createPerson(firstName: string, lastName: string) {
    return {
        firstName,
        lastName,
    };
}

function logPersomn(person: ReturnType<typeof createPerson>) {
    console.log('Person:', person.firstName, person.lastName)
}
```

## 58. Mapped Types
- Mapped types are a way to create new types based on another type
- It iterate through keys of existing type to create a new type.

```ts
export type Point = {
    x: number,
    y: number,
    z: number,
};


// we used mapped type to make the center object immutable
const center: Readonly<Point> = {
    x: 0,
    y: 0,
    z: 0
};

```


---
# Mapped Type Modifiers - Partial<Type>, Required<T> -?, Readonly<T>, Mutable<T>
- A `***mapped type***` in TypeScript means we're taking one type and transforming it into another type by applying a transformation to each of its properties.
---
## 59.  `Partial<Type>`
- `Partial<Type>` is a TypeScript utility type that transforms all properties of a given type T into optional properties

```ts
export class State<T> {
    constructor(public current: T) { }
    update(next: Partial<T>) {
        this.current = {...this.current, ...next };
    }
}

const state = new State({x: 0, y: 0});
state.update({ y: 123 });
console.log(state.current); // { x: 0, y: 123 }

```

## 60. Template Literal Type
- By defining the pattern that a string must match, these types provide a way to validate and infer data
- Template literal types in TypeScript enable the creation of new string literal types by combining existing ones,

```ts
type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

/**
 *  @param style is a combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondar'
 * e.g. 'small-secondary'
 */

function applyStyle(style: Style) {
    // ......
}

applyStyle('small-primary');
applyStyle('large-primary');
applyStyle('smoll-primary');  // Error: spelling fo small is incorrect

// Example2:

type CSSValue = 
// implies px
| number
// number + px|em|rem
| `${number}px`
| `${number}em`
| `${number}rem`

function size(input: CSSValue) {
    return typeof input === 'number' ? input + 'px' : input;
}

size(123);
size('123px');
size('12em');
soze('12ex');  // Error
```

## 61. Partial<T>
- `Partial<Type>` is a TypeScript utility type that transforms all properties of a given type T into optional properties

```ts
type Point = { x: number, y: number};
// Same as `{ x?: number, y?: number }
type PartialPoint = Partial<Point>;


//Example:
class State<T> {
    constructor(public current: T) { }
    //Only need to pass in the properties you want changed
    update(next: Partial<T>) {
        this.current = { ...this.current, ...next };
    }
}

// Usage
const state = new State({ x: 0, y: 0, z: 0 });
state.update({ y: 123});   // Partial. No need to provide 'x'
console.log(state.current); // Update successful: { x: 0, y: 123, z: 0 }
```

## 62. Required<T> -?
- TypeScript's `Required<Type>` utility type creates a new type by making all properties of an existing type mandatory.

```ts
type PartialPoint =  { x?: number, y?: number };

// Same as `{ x: number y: number }`
type Point = Required<partialPoint>
```
```ts
// Optional members for consumers

type CircleConfig = {
    color?: string,
    radius?: number
}

class Circle {
    // Required: Internally all members will always be present
    private config: Required<CircleConfig>;
    
    constructor(config: CircleConfig) { 
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 0,
        }
    }

    draw() {
        // No null checking needed : )
        console.log(
            'Drawing a circle:',
            'Color:' this.config.color,
            'Radius:', this.config.radius
        );
    }
}
```



- `??` The ***nullish coalescing*** operator is used to provide a default value when the operand on the left-hand side is null or undefined. It works by returning the right-hand side value if the left-hand side value is null or undefined, otherwise it returns the left-hand side value.
- EXAMPLE: 
```ts
const name = null;
const defaultName = "John Doe";
const displayName = name ?? defaultName;
console.log(displayName); // Output: "John Doe"
```

## 63. Readonly<T> 
```ts
/**
 *  Make all properties in T readonly
 */

type Point = { x: number, y: number };

//same as `{ readonly x: number, readonly y: number }`
type ReadonlyPoint = Readonly<Point>
/**
 * hover over  `ReadonlyPoint` you will see 
 * type ReadonlyPoint = {
    readonly x: number;
    readonly y: number;
}
 */




/// Example 2:

function makeReadonly<T>(object: T): Readonly<T> {
    return Object.freeze({...object });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2;   // Success allowed

const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 3;  // Cannot assign to 'x' because it is a read-only property.
```

## 64. Record<K,V>
- `Record<Keys, Type>` Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
- A record is defined as a data structure that stores a related set of properties
- Now in JavaScript, it is common to store records as key value is within JavaScript objects, and that set provides the utility type to enter such objects, intuitively called record.

```ts
// Basic Example
type Point = Record<'x' | 'y', number>;
/**
 * hover over 'Point' ypu will see below code
 * type Point = {
    x: number;
    y: number;
}
 */
```

```ts
type PageInfo = {
    id: string,
    title: string
};

type PagesVerbose = {
    home: PageInfo,
    services: PageInfo,
    about: PageInfo,
    contact: PageInfo,
};

 // OR  above two types write using Recordz<K, V> K are properties, V are properties values//

type Pages = Record<'home' | 'service' | 'about' | 'contact', { id: string, title: string }>;
```

## 65. AutoComplete Literal Unions with Primitives
- Now the thing that we want to achieve is to still allow arbitrary strings but provide nice autocomplete for the well-defined design tokens.
- For example, the Union of String, a primitive type with a union of literal strings. Instead of doing a union with the simple string would be doing union with the string combined with something else, like an empty object, with a simple intersection with the standard place. The literals as well as the string are preserved in the final type of betting. And whenever we try to assign a value of type setting, we get nice autocomplete for these literal members.

```ts
type Padding = 'small' | 'normal' | 'large' | (string & {});

function getPadding(padding: Padding): string {
    if (padding === 'small') return '12px';
    if (padding === 'normal') return '16px';
    if (padding === 'medium') return '24px';
    return padding;
}

let padding: Padding;
padding = 'small'; // 12px
padding = '8px';  // 8px
padding = 'large';

```

## 66. Project Reference

## 67. undefined vs optional
- A common textual question is, is there a difference between an optional member versus a member that has a union with undefined? And the answer is yes, there is a behavior difference.
- My recommendation is to use the optional annotation unless you need to use the undefined value for an explicit use case.

```ts
type ExampleOptional = {
    name?: string,
};

let optional: ExampleOptional;

optional = { name: undefined };
optional = {};
// Having a member as optional means that a variable of this type can accept objects with the name either undefined or even the name completely excluded as well.

type ExampleUnion = {
    name: string | undefined,
};

let union: ExampleUnion;

union = { name: undefined };
union = {}  // Error: name is missing
// However, if we have a type with a property is string or undefined, then it can be initialized with something that has name pointing to the value undefined. However, it cannot be initialized with an object that is missing the name property and that is the fundamental difference between these two types.
// difference - One has a member that is truly optional versus the other has it required.



// Example:
function setConfig(config: {
    name: string,
    priority?: number,
}) {
    //......
}

setConfig( { name: 'hello', priority: undefined });
setConfig( { name: 'Hi', priority: 0 });
setConfig( { name: 'perfect' });
setConfig( { name: 'okay' });
```

## 68. satisfies operator
- to make sure that a particular object confirms to a particular type.
- The satisfies operator tells you whether a given type satisfies a particular condition – and it provides this information before running your code. Also, when you're using it, you can declare a new variable to verify if an expression's type matches another type.
- lets us validate that the type of an expression matches some type, without changing the resulting type of that expression.

```ts
type Color = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];

type Theme = Record<string, Color>;

const theme = {
    primary: 'red',
    secondary: [0, 255, 0],
    tertiary: 'purple'
} satisfies Theme;

const [r, g, b] = theme.secondary;
```

## 69. PropertyKey
- Now within JavaScript, only a `string`, `number` or `symbol` can be used as a key within a JavaScript property.

```ts
const str: string = 'key';
const num: number = 1337;
const sym: symbol = Symbol();
const obj = {};

const valid = {
    [str]: 'valid',
    [num]: 'valid',
    [sym]: 'valid',
};

const invalid =  {
    [obj]: 'invalid'   //Error: invalid
}

let example: PropertyKey;   //type PropertyKey = string | number | symbol
example = str;
example = num;
example = sym;
example = obj;  //Error:  Type '{}' is not assignable to type 'PropertyKey'
```

## 70. ThisType<T> Utility
- This particular type is something that is used to define the definition of this within a particular object.

```ts
type Methods = {
    double(): void,
    half(): void,
};

export const methods: Methods & ThisType<{ value: number }> = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    }
}

const obj = {
    value: 1,
    ...methods
};

obj.double();
console.log(obj.value);  // 2

obj.half();
console.log(obj.value);  // 1
```

```ts
type StateDescription<D, M> = {
    data: D;
    methods: M & ThisType<D & M>;
};

function createState<D, M>(desc: StateDescription<D, M>): D & M {
    return { ...desc.data, ...desc.methods };
}

let state = createState( {
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
        },
    },
});

state.x = 10;
state.y = 20;
state.moveBy(5, 5);
```

## 71. Awaited<T>  Utility
- It is used to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
- is used to extract the type that is being returned by a promise 


`await`
```ts

// await keyword within JavaScript will wait for all of the promises to resolve before returning the final resolved value.
main();
async function main() {
    const single: Promise<string> = new Promise( res => res('l4d135'));

    const triple: Promise<Promise<Promise<string>>> = 
    new Promise<Promise<Promise<string>>>(res => 
        res(
            new Promise<Promise<string>>(res =>
                res(
                    new Promise<string>( res => {
                        res('Vin Diesel');
                    })
                )
            )
        )
    );
    const singleResult = await single;
    console.log(singleResult);  // l4dl35

    const tripleResult = await triple;
    console.log(tripleResult); // Vin Diesel
}
```

`Awaited<T>`
```ts
type WrappedInDeep = Promise<Promise<Promise<Promise<string>>>>;

type AwaitedResult = Awaited<WrappedInDeep>;
```

```ts
async function example<T>(input: T) {
    const output: Awaited<T> = await input;
}
```

## 72. Intrinsic String Manipulation Utilites

***intrinsic*** means is that there is actually no definition for it. This is something that is baked into the of compiler.
- Uppercase<StringType> - Converts each character in the string to the uppercase version.
- Lowercase<StringType> - Converts each character in the string to the lowercase equivalent.
- Capitalize<StringType> - Converts the first character in the string to an uppercase equivalent.
- Uncapitalize<StringType> - Converts the first character in the string to a lowercase equivalent.

```ts
type Greeting = "Hello, world";
type ShoutGreeting = Uppercase<Greeting>; // hover: type ShoutGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my-app">;   // hover: type MainID = "ID-MY-APP"


type Greeting1 = "Hello, world";
type ShoutGreeting1 = Lowercase<Greeting1>; 

type ASCIICacheKey1<Str extends string> = `id-${Lowercase<Str>}`;
type MainID1 = ASCIICacheKey1<"MY_APP">;  



type Greeting2 = "hello, world";
type ShoutGreeting2 = Capitalize<Greeting2>; 



type Greeting3 = "HELLO, WORLD";
type ShoutGreeting3 = Uncapitalize<Greeting3>;  // hover: type ShoutGreeting3 = "hELLO, WORLD"
```

```ts
type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type Name = 'name';

type GetName = Getter<Name>;
type SetName = Setter<Name>;
```

## 73. Mapped Types `as` clause
- you can re-map keys in mapped types with an `as` clause in a mapped type
- You can use the “as” keyword to rename the keys for your mapped types. This can be combined with template literal types, which lets you modify key names like strings.

```ts
type State = {
    name: string,
    age: number,
};

/**
 *  {
 *    setName: (value: string ) => void;
 *    getAge: (value: number) => void;
 *  }
 */

type Setters = {
    [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
};
/*  hover on Setters: type Setters = {
 *  setName: (value: string) => void;
 *  setAge: (value: number) => void;
}
*/

```

```ts
export type Setters<State> = {
    [K in keyof State & string as `set${Capitalize<K>}`] : (value: State[K]) => void;
};

export type Getters<State> = {
    [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

export type Store<State> = Setters<State> & Getters<State>;

type PersonState = {
    name: string,
    age: number
};

declare const personStore: Store<PersonState>;
personStore.setName("John");
personStore.setAge(20);

const name: string = personStore.getName();
const age: number = personStore.getAge()
```

## 74. TypeScript `Unions |` vs Intersection `&` Mental Model

```ts
export type Name = { name: string };
export type Age = { age: number };

// we can combine above two type alias by union or by intersection

type Union = Name | Age;  // Now, with the union, what we are trying to say is that the object will contain the properties of the name or it will contain the properties of age.

type Intersection = Name & Age;  // And with an intersection we are saying that it must contain the properties of name as well as age.


// Example

const name = { name: 'Jane' };
const age = { age: 29 };
const nameAndAge = { name: 'Jane', age: 29 };

let union: Union;

union = name;
union = age;
union = nameAndAge;

let intersection: Intersection;

intersection = nameAndAge;
intersection = name; // Error
intersection = age;  // Error
```

```ts
export type Name = { name: string } ;
export type  Age = { age: number };

type Union = Name | Age | (Name & Age);

let union: Union;

union = { name: 'Jane' };
union = { age: 29 };
union = { name: 'Jane', age: 29 };

function filter(union: Union) {
    if ('name' in union) { // Name
        union.name;  // string
    }


if ('age' in union) { // Age
  union.age; // number    
}

if ('name' in union && 'age' in union) { // Name & Age
    union.name;
    union.age;    
  }
}

```

## 75. Enums - Enumerations
- Enums allow a developer to define a set of named constant (unchangeable variables).
- TypeScript provides both numeric and string-based enums.
- enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members
- The output of a TypeScript enum is an object 
- ***Place to use an enum:*** Enums should be used whenever there is a small set of fixed values available that are closely related and further these values are known at compile time.


### 1. Numeric Enums - Default
- By default, enums will initialize the first value to 0 and add 1 to each additional value:

```ts
enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.West;
console.log(currentDirection); // 2
console.log(CardinalDirections)
/*
{
  '0': 'North',
  '1': 'East',
  '2': 'South',
  '3': 'West',
  North: 0,
  East: 1,
  South: 2,
  West: 3
}

*/
```
```ts
enum CardinalDirections {
    North = 1,
    East = 2,
    South = 0,
    West = 6
}


console.log(CardinalDirections);
let currentDirection = CardinalDirections.West;
console.log(currentDirection); // 6

/**
 * {
  '0': 'South',
  '1': 'North',
  '2': 'East',
  '6': 'West',
  North: 1,
  East: 2,
  South: 0,
  West: 6
}
6
 */
```

```ts
// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
    North,
    East = 0,
    South,
    West = 1
  }
 
  console.log(CardinalDirections.North); // 0

  console.log(CardinalDirections);
  /**
    { '0': 'East',
      '1': 'West',
      North: 0, 
      East: 0, 
     South: 1, 
     West: 1
      }   
   */
```

```ts
// Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);
  ```
### 2. String Enums
- Enums can also contain strings. This is more common than numeric enums, because of their readability and intent (purpose)

```ts
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```

```ts
enum fruitsName {
    Apple = "APPLE",
    Banana = "Banana",
    Mango = "Mango",
    Papaya = "Papaya"
}
console.log(fruitsName);  //{ Apple: 'APPLE', Banana: 'Banana', Mango: 'Mango', Papaya: 'Papaya' }

console.log("Fruit name is : " + fruitsName.Apple); //Fruit name is : APPLE

```

### 3. Heterogeneous Enums: 
- Heterogeneous enums contain both numeric and string enums values. 

```ts
// in output, you see, it does reverselookup for numeric value first
enum studentDetails {
    name = "ABCD",
    age = 20,
    rollno = 12345,
    address = "XYZ Place PQR city",
    school_name = "ABCDEFG"
}
console.log(studentDetails);

/**
 {
  '20': 'age',
  '12345': 'rollno',
  name: 'ABCD',
  age: 20,
  rollno: 12345,
  address: 'XYZ Place PQR city',
  school_name: 'ABCDEFG'
}
 */
```
### 4. Computed enums:
-  Computed enums in TypeScript allow us to generate enum values dynamically based on computations or function calls. 
- This provides greater flexibility in defining enum members, enabling more complex scenarios where enum values need to be calculated at runtime.

```ts
enum Weekdays {
    Monday = 1,
    Tuesday = Monday + 1,
    Wednesday = Tuesday + 1,
    Thursday = Wednesday + 1,
    Friday = Thursday + 1,
    Saturday = Friday + 1,
    Sunday = Saturday + 1
}

console.log(Weekdays);

/*
{
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
  "7": "Sunday",
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
  "Sunday": 7
}
*/
```

## Why not use enums ?
-  they are not a part of standardized JavaScript

```ts

// In case of numeric enums
enum LoginMode {
    app = 0,
    email = 1,
    social = 2
}
// Lookup and reverse Lookup
console.log(LoginMode['app']);  // 0
console.log(LoginMode[0]);  // 'app'

// Get all the keys
const keys = Object.keys(LoginMode);

console.log(keys);
// Want: ['app', 'email', 'social']
// But what we got in output: ['app', 'email', 'social', '0', '1', '2' ]   // You're going to get the keys as well as the reverse keys.


// in case of string enums
enum LoginMode {
    app = 'app',
    email = 'email',
    social = 'social'
}


// Get all the keys - only lookup
const keys = Object.keys(LoginMode);
console.log(keys); // ['app', 'email', 'social']

// stable over network
console.log(LoginMode.app);  // 'app'
```

```ts
// it is perfectly fine that if you want to write a function that will only take a log in mode, you would have to import the. And then you would have to use it in a type annotation.
import { LoginMode } from './index';
export function initiateLogin(mode: LoginMode) {
    // ......
}

//if you use a function that requires an enum, it's going to be more verbose than it needs to be. You cannot simply initiate login with a valid member. For example, if you got this string from a network, you still need to find a way to convert this into an actual enum, which you will most likely do with the type assertion. So any time you have to use some code that depends on a num, you have to first bring in the enum and then look up the member from the enum, even though it should be able to accept the valid string.


import { initiateLogin } from './initiateLogin';
import { LoginMode } from './index';

     initiateLogin('app');    // without `import { LoginMode } from './index';` this import it shows error
```

- Instead enum, we can use as const-> makes it readonly
```ts


export const LoginMode = {
    device: 'device',
    email: 'email',
    social: 'social'
} as const;

export type LoginMode = keyof typeof LoginMode;

export function initiateLogin(mode: LoginMode) {
    // .....
}

console.log(initiateLogin('device'));

console.log(initiateLogin(LoginMode.device));

Object.keys(LoginMode);  //  ['device', 'email', 'social']

```

- use type only, for example, a union of string literals.

```ts
type LoginMode = 
| 'device'
| 'email'
| 'social';

function intiateLogin(loginMode: LoginMode): string {

    if (loginMode === undefined || null) {
        throw new Error('Not possible!');
    }
    return loginMode;
    // ....
}

console.log(intiateLogin('device'));  



                            // OR //
type LoginMode = 
| 'device'
| 'email'
| 'social';

function intiateLogin(loginMode: LoginMode) {

    if (loginMode === undefined || null) {
        throw new Error('Not possible!');
    }
    console.log(loginMode);  // device
    // ....
}

intiateLogin('device');  

```