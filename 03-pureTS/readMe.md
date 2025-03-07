## Production SetUp

- Open Terminal
 - tsc --init    // it creates simple typescript config file
 - npm init -y   // it generates package.json file 
 - mkdir src dist  // it created tow folders src and dist
 
- In src folder - create index.ts file
- Create indexx.html in root directory; add `<script with src="./dist/index.js"></script>`  // it automatcially generates your ts code in this js file inside dist
- Go inside tsconfig.json -> line 62  `"outDir": "./dist",`        // give the destination for output

- Open Terminal
 - tsc -w // it runs your src code ts in watch mode and amend the changes in the dest code js


##### Real-world the way of writing class
```ts
class User1 {       
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string, 
        private userId: string
    ) {
        this.userId  // private can only be used inside the class only
    }
}

const himani2 = new User1("himani@gmail", "Himani2", "1434")
himani2.city   
```
 ### class
 **class -> classes are blueprints for creating objects**

 A TypeScript class is a blueprint for creating objects, encapsulating properties (data) and methods (behavior) to promote organization, reusability, and readability.

- Supports inheritance, allowing one class to extend another and reuse functionality.
- Provides access modifiers (public, private, protected) to control member accessibility and enforce encapsulation.
```ts
// basic example
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.introduce());
```




- in JavaScript 
```js
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name
    }
}
```

 - in **TypeScript** -> inform the class about properties in advance before constructor

> - TypeScript adds types and visibility modifiers to JavaScript classes
> - The members of a class (properties & methods) are typed using type annotations, similar to variables.
> - There are three main visibility modifiers in TypeScript.
>> 1. public - (default) allows access to the class member from anywhere
>> 2. private - only allows access to the class member from within the class
>> 3. protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

 ### what is constructor 
- The constructor method is a special method:
 - It has to have the exact name "constructor"
 - It is executed automatically when a new object is created
 - It is used to initialize object properties
 - In **TypeScript** Class constructors are very similar to functions. You can <ins>add parameters with type annotations, default values, and overloads</ins>:





 ```ts
 class User {
    email: string           // write the property name in advance to inform the class about their existence, otherwise it doesn't recoginze them
    name: string          // write the property name in advance to inform the class about their existence
    city: string = ""
  //readonly city: string = "Jaipur"   // then it will not allow you to change the city
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const himani = new User("himani@gmail", "Himani")   // provide the values only
//himani.city = 2   //  Type 'number' is not assignable to type 'string'
himani.city = "Jaipur"
//himani.city = "delhi"
```

---

***session 2***

---

### Type Modifiers Keywords 


1. ***private*** -> only accessible within class; private name or #name
```ts
// private city is showing error when used outside the class
class User1 {
    email: string          
    name: string         
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
        this.city             // totally allowed to use city hear because it is in the class
    }
}

const himani1 = new User1("himani@gmail", "Himani1")
himani1.city    // Property 'city' is private and only accessible within class 'User1'.

```
2. ***public*** -> everything you domnt mark is public by default, and also you can write manually the public keyword before the propertyname. You can explicitly mention that.

```ts
class User1 {
    public email: string          
    name: string              // name is also public by default
    private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const himani1 = new User1("himani@gmail", "Himani1")
himani1.name
```

3. protected - the property can be used in its own class as well as in the class which inherits its class. 
 - Example is in the ***inheritence*** section 

---

#### Getters & Setters

**Getters & Setters  --> called Accessors / Access Modifiers**

getters/setters as a way of ***intercepting(means stopping/blocking) accesses*** to a member of an object. This gives you a way of having full control over how a member is accessed on each object.

```ts
// Basic Example

class MyClass {
  private _myProperty: string;

  get myProperty(): string {
    return this._myProperty;
  }

  set myProperty(value: string) {
    // Add any validation or additional logic here
    this._myProperty = value;
  }
}

const myObject = new MyClass();

// Using the getter
console.log(myObject.myProperty); // Output: undefined

// Using the setter
myObject.myProperty = "Hello, world!";

// Using the getter again
console.log(myObject.myProperty); // Output: Hello, world!

```

1. **get** -> Getter methods allow you to retrieve the value of a property
2. **set** -> setter methods enable you to modify the value of a property with certain validations or actions. A 'set' accessor cannot have a return type annotation.

```ts

// also include example of privare method
class Student {     

    private _courseCount = 1

    constructor(
        public email: string, 
        public name: string, 
        private userId: string
    ) {
        
    }
     // private method ----------------
    private deleteToken() {
        console.log("Token deleted");
    }

    //getter appleEmail
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // basic getter for courseCount
    get courseCount(): number {
        return this._courseCount
    }

    //setter - there should be nothing as return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than a 1")
        }
        this._courseCount = courseNum
    } 
}
const Himani3 = new Student("h@h", "Himani3", "123")

//Himani3.deleteToken()  // Property 'deleteToken' is private and only accessible within class 'Student'.
```


---

### Class Inheritence ---> 
- extends 
- it cannot acquire **private properties**

> ***protected** - the property can be used in its own class as well as in the class which inherits its class 

```ts
class Student {     

    protected _courseCount = 1

    constructor(
        public email: string, 
        public name: string, 
        private userId: string
    ) {
        
    }
     // private method ----------------
    private deleteToken() {
        console.log("Token deleted");
    }
    //getter appleEmail
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    // basic getter for courseCount
    get courseCount(): number {
        return this._courseCount
    }

    //setter - there should be nothing as return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than a 1")
        }
        this._courseCount = courseNum
    } 
}


class Coder extends Student {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const Himani3 = new Student("h@h", "Himani3", "123")
```


---



***second.ts***

### Interface - applying knowledge of classes

- ***implements** 
 - it is used by class to use the interface and follow the protocols to create the class
 -  All interface properties should be there in the class, it can exceeds but not decreases

```ts
// interface 1
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

// interface 2
interface Story {
    createStory(): void
}
/// implements - following the protocol of TakePhoto
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string  
    ) {}

    createStory(): void {
        console.log("Story was created");
    }
}
```
---

### Abstract Classes 

**Abstract Classes -> from abstract class no new object can be createde from it**

- ***implements*** only use with interface
- ***extends**** only use with class




**what's the use of abtract classes if the interfaces are available?**
**Ans**
- from abstract class no new object can be created
- ***abstract class*** help to define the class that inherits abstract class
- object is created from the class that extends the abstract class
- In the inherited class contructor; pass the all inherited properites as paramter in the ***super** to use the inherited class to create object
- If you want some methods that should be **compulsory** there and be **same everytime** in the inherited class, prefex ***abtract*** before methods name in the abstract class ;  if someone is using the abstract class, they need to implement it anyhow - consider the below example of method sepia(): void

- if the abstract class method is not implemented inside the inherited class, it doesn't show any error. See below in ***getReelTime()*** method

```ts
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void  //  this is an abstract method, i dont know how anybody is going to implement it but they need to implement it otherwise they are not following the abstract class
    // this getReelTime() doesn't give me any problem, if it doesn't implemented in inherited class, this is the use abstract classes
    getReelTime(): number {
        //some complex calculation 
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)   // pass all required values inherited from abstract class
    }

    // implemented sepia()
    getSepia(): void {
        console.log("Sepeia")
    }

}

const hc = new Instagram("test", "test", 3)
hc.getReelTime()    // thats totally allowed in inherited
```


    Diff                      interface                                                                             class
   Keyword       class className implements interfaceName{constructor(){}}                 class className extends existingClassName{constructor(){}}
   object              const person = new Person(parameters-----)                                      const person = new Person(parameters---)

---

### Generics <>  ->
- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
- It helps to create a component that can work over a variety of types rather than a single one.
***generic*** helps to capture the type of arguments and is used to denote what is being returned. 
- type variable, a special kind of variable that works on types rather than values.
                   
```ts

// without using generic <>
const scores: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}
// identityThree("3")





// Generic <> :  <type> or <T>
// Using generc <T> ----------------------------------------------------

//   customized generic type see the interface Bootle, used as generic type
function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string
    type: number
}
// identityFour<Bootle>({ brand: "Puma", type: 12})


//---------------------------------------------------------------


//   generic <> function returning single value T from array T[] ------------------------

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//  generic <> arrow function ------------------------
const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

```

---

```ts
// T and U - inputs  -> T generic type - number; U generic type string
function anotherFunctions<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunctions(3, "4")    // here you see T is number type and U is string type

```

#### extends generic <>

```ts
// here extends only accepts number type after T, T refers to string value
function anotherFunctions11<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunctions11("3", 4.3) 


//-----------------------------------------------------//



// using extends with interface

interface Database {
    connection: string,
    user: string,
    email: string
}

function anotherFunctions1<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunctions1(3, {connection: "connect", user: "himani", email: "him@k"})  

```

#### class generic <>
```ts
//basic example 
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}
```

---

## Narrowing - 
- use ***typeof*** (type guard) to check the value type  for extra precautions
- provide extra cautious writing ***null** in datatype option, if the value is not available  

```ts
// typeof to check type first before returning
function detectType(val: number | string) {
    if (typeof val === "string") {
       return val.toLocaleLowerCase()
    }
    return val + 3
}

//-----------------------------------//
// use null to check is the value exist 
function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide id")
    }
}

//--------------------------------------//

function printALl(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
```

## in operator narrowing

1. ***in*** to determine if an object has a property with that name

```ts
// in operator narrowing

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// in operator helps to narrow down which interface (User or Admin) it is by checking the property name (isAdmin) in the object - (account)
function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }

}

```

How we can go in more precise way in narrowing
2. ***instanceof*** -> check whether the value is the instance of another value
```ts
// instanceof  --- used in scenario of value constructed with new keyword

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
```

3. ***type predicates** 
- type predicate -> user-defined type guard; simply define a function whose return type is type predicate like pet is Fish
-  as 

```ts
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet 
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}
```


4. ***Discriminated Unions*** -  Precise Type Checking; A discriminated union is a union type where each member has a common property that uniquely identifies its type. Below is kind property
5. ***never type*** - Exhaustiveness checking -> reperesent the state which shouldn't exist, see below in switch statement's ***default case***

```ts

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } else {
        // return shape.side * shape.side
    }
}


function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape    
    }
}
```



 
