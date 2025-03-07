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



//---------------------------------//
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


//------------------------------//
// instanceof  --- used in scenario of value constructed with new keyword

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

//---------------------------------------------------------//
//type predicate -> user-defined type guard; simply define a function whose return type is type predicate like pet is Fish
// as 

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


//-----------------------------------------//

// discriminated union - precise type checking;A discriminated union is a union type where each member has a common property that uniquely identifies its type below is kind property
// never type - 

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


