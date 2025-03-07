// enums -> define a set of named constants
// there are certain times when you want to restrict somebody's choice  or with the values that are offered here.
// for example- in e-commerce application, somebody is putting up an order, so you want to really restrict the order status, that means order can be in wishlist or it can be delivered
// const AISLE = 0   // this code can be changed, so we use enums to resolve this scenario
// const MIDDLE = 1
// const WINDOW = 2
// if (seat === AISLE) { }
// use of enums------>
// numberic-based enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 5] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 6] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.MIDDLE; // after dot notation, it shows dropdown to select one option that is defined inside SeatChoice enum
// string-based enum -> initialize each enum member with string literal. It doesn't have auto-incrementing behavior
var SeatChoice1;
(function (SeatChoice1) {
    SeatChoice1["AISLE"] = "aisle";
    SeatChoice1["MIDDLE"] = "middle";
    SeatChoice1["WINDOW"] = "window";
    SeatChoice1["FOURTH"] = "fourth";
})(SeatChoice1 || (SeatChoice1 = {}));
var mySeat1 = SeatChoice1.WINDOW;
var mySeat2 = "window" /* SeatChoice2.WINDOW */;
//NOTE: ->  writing const before enum will noit generate uncessary code
