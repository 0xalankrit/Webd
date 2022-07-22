let x = { name: "John", age: "54" };
// let name ="John";
// let age =54;

let name2 = "jhonny";
let age2 = 45;

let nameArr = ["John", "Jhonny"];
let ageArr =[54, 45];

console.log(nameArr);
console.log(ageArr);

let name = "John";
let age = 54;
// let obj=[
//     {
//         name: "John",
//         age: 54,
//         city: "NY",
//     },
//     {

//         name: "Johnny",
//         age: 45,
//         city: "USA",
//     },
// ];
// console.log(obj);

let obj ={
    name: "John",
    age: 541,
    city: "NY", 
}

let obj2 = {};
obj2.name= "John";
obj2.age = 88;
obj2.city ="Delhi";
console.log(obj2);

obj2.country = "India";
console.log(obj2);
delete obj2. country;
console.log(obj2);
obj2.name = "Harsh";
obj2.age = 20;

obj2["first name"] = "John";
console.log(obj2);
console.log(obj2["name"]);

console.log(Object.values (obj2));
console.log(Object.keys (obj2));
