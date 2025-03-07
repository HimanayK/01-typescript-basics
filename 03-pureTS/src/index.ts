class User {
    email: string           // write the property name in advance to inform the class about their existence
    name: string          // write the property name in advance to inform the class about their existence
    city: string = ""
    // readonly city: string = "Jaipur"   // then it will not allow you to change the city
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const himani = new User("himani@gmail", "Himani")   // provide the values only
//himani.city = 2   //  Type 'number' is not assignable to type 'string'
himani.city = "Jaipur"
//himani.city = "delhi"



// Type Modifiers -------------------> readonly

// class User1 {
//     public email: string          
//     private name: string         
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

// const himani1 = new User1("himani@gmail", "Himani1")
// himani1.city    


///------Real-world the way of writing the class --------------------///
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


//// Getter & Setter
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

//Himani3.deleteToken()  // Property 'deleteToken' is private and only accessible within class 'Student'.


