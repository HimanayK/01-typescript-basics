# freeCodeCamp - TypeScript by Hitesh

## TypeScript
> - This is just a Development tool, a wrapper around javaScript to make your life easier and safe.
> - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
> - TypeScript does static checking, means it checks the error while typing the code that will happen during the runtime in JavaScript



### Intallation 
- check versions
  - node -v 
  - npm -v
- npm install -g typescript
  - tsc -v
- Create the folde in vscode, create file example intro.ts
- Open Terminal 
  - tsc intro.ts -> it creates the intro.js


  ### Types:
| Type       | Category   | Example |
|------------|-----------|---------|
| <span style="background-color: lightblue">Number</span>     | Primitive  | `42` |
| <span style="background-color: lightgreen">String</span>     | Primitive  | `"Hello"` |
| <span style="background-color: lightcoral">Boolean</span>    | Primitive  | `true` / `false` |
| <span style="background-color: lightgray">Null</span>       | Primitive  | `null` |
| <span style="background-color: lightyellow">Undefined</span>  | Primitive  | `undefined` |
| <span style="background-color: lightsalmon">Void</span>       | Special    | `void` |
| <span style="background-color: lightpink">Object</span>     | Reference  | `{ key: "value" }` |
| <span style="background-color: lightseagreen">Array</span>      | Reference  | `[1, 2, 3]` |
| <span style="background-color: lightsteelblue">Tuple</span>      | Special    | `[string, number]


### Example:
let variableName: type = value;

---

### any
- means you dont want any type checking; get away from the syntax of TypeScript. the variable can be any type  
- Also, when you don't specify a type and TypeScript can't infer it from context, the compiler will typically default to ***any***


## Object -------------------------------------------------------
### type alias
```js
type User = {
    name: string;
    email: string;
    isActive: boolean
}
```

---

### readonly
```js
type User = {
    readonly _id: string;  // common thing in mongoDB, readonly means no one can manipulate it later
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number   // optional
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h.h@gmail",
    isActive: false
}

myUser.email = "himanay@gmail.com"
myUser._id = "asa"   // shows error bcoz _id is read-only property
```

---

### & (ampersand) symbol

```js
////  & (ampersand) symbol use to combine them -> use case; define a new type based on the combination of previous types

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
```

---

### Array ----------------------------------------

**never[] AND []**
```js
///// empty array [] ; hover on superHeros, you will see superHeros: never[]
const superHeros = []       // hover -> type is never[]
superHeros.push("hello")    // error -> is not assignable to paramter of type 'never


const superHeross: [] = []     // hover -> type is [] i.e empty now it is an empty array
superHeros.push("hello")      // // error -> is not assignable to paramter of type 'never

```

**type array[]**
```js
const superHeros1: string[] = []     //type is array of strings
// const heroPower: number[] = []     // type is array of numbers
const heroPower: Array<number> = []   // it is same as above line type is array of numbers

superHeros1.push("spiderman")
heroPower.push(2)


type User = {
    name: string;
    isActive: boolean
}

const allUsers: User[] = []      // array of users and each user is in the form of object

allUsers.push({name: "Himani", isActive: true})



///  number[][] -> array inside an array like matrix
const MLModels: number[][] = [
    [255, 255, 255],
    []
]      // array inside an array
```

---

### union type ----------------------------------------
- In a situation where you are not pretty sure what type of data is going to come in, then use union  
- it helps you avoid any

```js
/// union basics -> | pipe symbol
let score: number | string  = 33

score = 44

score = "55"
```

```js
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

// hitesh can be User type or Admin type
let hitesh: User | Admin = {
    name: "hitesh",
    id: 334
}

hitesh = {username: "hc", id: 334}
```

```js

// use check i.e if condition to check the type of id, so that you can use toLowerCase() without type error
function getDbId(id: number | string) {
   // id.toLowerCase()  // error Property 'toLowerCase' does not exist on type 'string | number'. To make it work, write a check written below

   if (typeof id === "string") {
    id.toLowerCase()     // hover and see (parameter) id: string; it is verified now, that it is a string type
   }

}

getDbId(3);
getDbId("3")
```


- **Array in union |**
```js
// array using union |

const data: number[] = [1, 2, 3, 4]
const data1: string[] = ["1", "2", "3", "4"]
const data2: string[] | number[] = ["1", "2", "3", "4"]   //  means it can be either array of string or array of number but not the mix of both
const data3: (string | number | boolean)[] = ["1", 2, "3", 4, true]     // mix of three types number, string, and boolean

```
```js
// Literal assignment -------------------
let pi: 3.14 = 3.14
//pi = 3.15   // Type '3.15' is not assignable to type '3.14'



// real use case
let seatAllotment: "aisle" | "middle" | "window"
//seatAllotment = "crew"   // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'
```

---

### Tuple -> follows the specified order defined in  Type

```js
// const user: (string | number)[] = [1, "hc"]   // it is a mix of both 

let tUser: [string, number, boolean]    //specific format 0 index should contain particular type like this

tUser = ["hc", 123, true]    //order should be same as defined in type


// another case: -

let rgb: [number, number, number] = [255, 255, 255]    // you cannot add opacity in it, because it defines only 3 values in type

// another example where we see that we can use different array methods; and tuple didn't show the restricition
type User = [number, string]   // just an array with restriction that - first value should be number and 2nd should be string
const newUser: User = [14, "himanay.k@gmail.com"]

newUser[1] = "deepak@gmail"
newUser.push("true")    // not following the restriction
```
---

### Enums - > 
allow a developer to define a set of named constants. An enum can be defined using the <ins>enum</ins> keyword
- numeric-based enums 
- string-based enums

####  Numeric enums
```js
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```
>Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

```js
// If we wanted, we could leave off the initializers entirely:
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```
> Here, Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

####  String enums -> 
In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member

```js
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```
> While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well. In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on its own


#### Heterogeneous enums ->
Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so:
```js
const enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = 5,
    WINDOW = "window",
    FOURTH = 3
}
const mySeat2 = SeatChoice2.WINDOW
```
>Unless you’re really trying to take advantage of JavaScript’s runtime behavior in a clever way, it’s advised that you don’t do this.

> **NOTE:**
>> const - writing const before enum will noit generate uncessary code

---

## Type Aliases -> 
- allow defining types with a custom name (an Alias).
- Type Aliases can be used for primitives like string or more complex types such as objects and arrays

```js
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}
```

---

## Interface ->
allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have
- only applied to an object

**SYNTAX**
```ts
interface InterfaceName {
    property1: type;
    property2: type;
    method(): type;
    // Additional properties and methods can be defined here
}
```
> Here's a breakdown of the syntax elements:
>> - interface: Keyword used to define an interface.
>> - InterfaceName: Name of the interface following TypeScript naming conventions.
>> - property1, property2: Properties of the interface.
>> - type: TypeScript type annotation defining the type of each property.

```ts 
// EXAMPLES:----

interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    //startTrial: () => string   // a function which returns string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

const hitesh: User = {
    dbId: 1,
    email: "himani@gmail",
    userId: 112,
    startTrial: () => {
        return "trial started"
    },
    // note: paramter values are written using : colon in typeScript
    getCoupon: (name: "coupon1", off: 1) => {
        return 10
    }
}

hitesh.email = "deepak.h"
// hitesh.dbId = 12  // Cannot assign to 'dbId' because it is a read-only property

```

### Reopen Interface - > means adding more properties
```ts
interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    //startTrial: () => string   // a function which returns string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}


interface User {
    githubToken: string   //added new property to the existing User interface
}

const hitesh1: User = {
    dbId: 1,
    email: "himani@gmail",
    userId: 112,
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    // note: paramter values are written using : colon in typeScript
    getCoupon: (name: "coupon1", off: 1) => {
        return 10
    }
}

hitesh1.email = "deepak.h"
```

#### Interface Inheritence -> extends
 use **extends** keyword to inherit the properties of other interface

 ```ts
 interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    //startTrial: () => string   // a function which returns string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string   //added new property to the existing User interface
}

interface Admin extends User {
    role: "admin" | "TA" | "Learner"
}

const hitesh1: Admin = {
    dbId: 1,
    email: "himani@gmail",
    userId: 112,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    // note: paramter values are written using : colon in typeScript
    getCoupon: (name: "coupon1", off: 1) => {
        return 10
    }
}

hitesh1.email = "deepak.h"
 ```

> interface Admin extends interfac1, interface2 {
>  role: "admin" | "TA" | "Learner"
> }

