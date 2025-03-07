///// empty array [] ; hover on superHeros, you will see superHeros: never[]
var superHeros = []; // hover -> type is never[]
// superHeros.push("hello")    // error -> is not assignable to paramter of type 'never
var superHeross = []; // hover -> type is [] i.e empty now it is an empty array
// superHeros.push("hello")      // // error -> is not assignable to paramter of type 'never
//// array type 
var superHeros1 = []; //type is array of strings
// const heroPower: number[] = []     // type is array of numbers
var heroPower = []; // it is same as above line type is array of numbers
superHeros1.push("spiderman");
heroPower.push(2);
var allUsers = []; // array of users and each user is in the form of object
allUsers.push({ name: "Himani", isActive: true });
///  number[][] -> array inside an array like matrix
var MLModels = [
    [255, 255, 255],
    []
]; // array inside an array
