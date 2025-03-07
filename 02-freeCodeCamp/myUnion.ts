/// union basics -> | pipe symbol
let score: number | string  = 33

score = 44

score = "55"


//---------------------------------------------//

type User1 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

// hitesh can be User type or Admin type
let hitesh: User1 | Admin = {
    name: "hitesh",
    id: 334
}

hitesh = {username: "hc", id: 334}


// --------------------------------------------------------//

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3")

function getDbId(id: number | string) {
   // id.toLowerCase()  // error Property 'toLowerCase' does not exist on type 'string | number'. To make it work, write a check written below

   if (typeof id === "string") {
    id.toLowerCase()     // hover and see (parameter) id: string; it is verified now, that it is a string type
   }

}




// array using union | pipe symbol

const data: number[] = [1, 2, 3, 4]
const data1: string[] = ["1", "2", "3", "4"]
const data2: string[] | number[] = ["1", "2", "3", "4"]   //  means it can be either array of string or array of number but not the mix of both
const data3: (string | number | boolean)[] = ["1", 2, "3", 4, true]     // mix of three types number, string, and boolean


// Literal assignment -------------------
let pi: 3.14 = 3.14
//pi = 3.15   // Type '3.15' is not assignable to type '3.14'



// real use case
let seatAllotment: "aisle" | "middle" | "window"
//seatAllotment = "crew"   // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'


