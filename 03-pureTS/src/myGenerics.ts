// Generic <> :  <type> or <T>


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


//--------------------------------------------------------------------//
// T and U - inputs  -> T generic type - number; U generic type string
function anotherFunctions<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunctions(3, "4")    // here you see T is number type and U is string type



//----------------------------------------------------//

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


//-----------------------------------------//

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


