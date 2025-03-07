//Tuple -> restricting you to have the values in order as specified in type order



// const user: (string | number)[] = [1, "hc"]   // it is a mix of both 

let tUser: [string, number, boolean]    //specific format 0 index should contain particular type like this

tUser = ["hc", 123, true]    //order should be same as defined in type


// another case: -

let rgb: [number, number, number] = [255, 255, 255]    // you cannot add opacity in it, because it defines only 3 values in type

// another example where we see that we can use different array methods; and tuple didn't show the restricition
type User = [number, string]   // just an array with restriction that - first value should be number and 2nd should be string
const newUser: User = [14, "himanay.k@gmail.com"]

newUser[1] = "deepak@gmail"
newUser.push("true")    // not following the restriction

