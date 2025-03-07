// interface -> definition of function makes it different
interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    //startTrial: () => string   // a function which returns string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

// const hitesh: User = {
//     dbId: 1,
//     email: "himani@gmail",
//     userId: 112,
//     startTrial: () => {
//         return "trial started"
//     },
//     // note: paramter values are written using : colon in typeScript
//     getCoupon: (name: "coupon1", off: 1) => {
//         return 10
//     }
// }

// hitesh.email = "deepak.h"
// hitesh.dbId = 12  // Cannot assign to 'dbId' because it is a read-only property



//// reopening the  User interface --------- means adding more properties---------------

interface User {
    githubToken: string   //added new property to the existing User interface
}

// inheritence - use extends keyword ---------------------------------->
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