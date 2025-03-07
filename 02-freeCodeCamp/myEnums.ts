// enums -> define a set of named constants
// there are certain times when you want to restrict somebody's choice  or with the values that are offered here.
// for example- in e-commerce application, somebody is putting up an order, so you want to really restrict the order status, that means order can be in wishlist or it can be delivered


// const AISLE = 0   // this code can be changed, so we use enums to resolve this scenario
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) { }


// use of enums------>
// numberic-based enum
enum SeatChoice {
    AISLE = 1,
    MIDDLE,
    WINDOW = 5,
    FOURTH,
}
const mySeat = SeatChoice.MIDDLE    // after dot notation, it shows dropdown to select one option that is defined inside SeatChoice enum


// string-based enum -> initialize each enum member with string literal. It doesn't have auto-incrementing behavior
enum SeatChoice1 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = "fourth"
}
const mySeat1 = SeatChoice1.WINDOW

// Heterogeneous enums -> mix of both - numberand string members
const enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = 5,
    WINDOW = "window",
    FOURTH = 3
}
const mySeat2 = SeatChoice2.WINDOW

//NOTE: ->  writing const before enum will noit generate uncessary code
