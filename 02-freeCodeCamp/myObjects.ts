// const User = {
//     name: "himani",
//     email: "himanay.k@gmail.com",
//     isActive: true
// }


////// ------ wrong doing.... use optional for new parameter or missing paramter
// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@gmail"}
// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "react.js", price: 399}
// }




///// type alias:   NOTE: inside type alias ; semi colon is used to seperate the properties

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})



///// readonly  & optional property ------------------------
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
//myUser._id = "asa"   // shows error bcoz _id is read-only property



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





export {}