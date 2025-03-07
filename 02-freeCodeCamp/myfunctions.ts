function addTwo(num: number):number {
    return num + 2
    //return "hello"
}

// parameter type
function getUpper(val: string) {
    return val.toUpperCase()
}


function signUpUser(name: string, email: string, isPaid: boolean) {}


// assigning default value to the parameter if it is not passed in argument  or  ? optional - isPaid?:
let loginUser = (name: string, email: string, isPaid: boolean = false) =>{} 


let myValue = addTwo(5)
getUpper("himani")

signUpUser("himani", "himanay.k@gmail.com", false)
loginUser("h", "h@h.com")



// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }


// Arrow function - return type
const getHello = (s: string): string => { 
    return ""
}


const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})



// void - explicitly mention void if the function is not returning anything
function consoleError(errmsg: string): void {
    console.log(errmsg);
}


// handle error - handling the error,and it is not going to be returning a void bcoz it handle the error.
// never - some functions never return a value
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}



export {}