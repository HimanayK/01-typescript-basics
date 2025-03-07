/// union basics -> | pipe symbol
var score = 33;
score = 44;
score = "55";
// hitesh can be User type or Admin type
var hitesh = {
    name: "hitesh",
    id: 334
};
hitesh = { username: "hc", id: 334 };
// --------------------------------------------------------//
// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // id.toLowerCase()  // error Property 'toLowerCase' does not exist on type 'string | number'. To make it work, write a check written below
    if (typeof id === "string") {
        id.toLowerCase(); // hover and see (parameter) id: string; it is verified now, that it is a string type
    }
}
// array using union | pipe symbol
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3", "4"];
var data2 = ["1", "2", "3", "4"]; //  means it can be either array of string or array of number but not the mix of both
var data3 = ["1", 2, "3", 4, true]; // mix of three types number, string, and boolean
// Literal assignment -------------------
var pi = 3.14;
//pi = 3.15   // Type '3.15' is not assignable to type '3.14'
// real use case
var seatAllotment;
//seatAllotment = "crew"   // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'
