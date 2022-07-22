//"If" runs only when particular condition becomes true
// "If won't run if it is false"
let age = 1;
console.log("Before If");

//0==false
//String == true
//Objects==true
//Other numbers=true
//arrays==true

if (age) {
    console.log("In if condition");
    console.log("You're too small");
} else cansole.log("Your age is not correct");
console.log("After IF");

let age2 = 0;
//age>18 //You can vote
//age<18 //You can't vote
// your age is incorrect

console.log(age2 > 18);
if (age2 > 18) {
    console.log("You are older than 18");
} else if (age2 > 0) {
    console.log("Your are smaller");
} else {
    console.log("You age is incorrect");
}


let age3 = 19;
let card = "Has Card";
//age>18 //You can vote
//age<18 //You can't vote
// your age is incorrect

console.log(age > 18 && card ==="Has Card");
if (age > 18 && card === "Has Card") {
    console.log("You are greter than 18");
    console.log("You have a card");
} else if (age > 18 || card === "Has Card") {
    console.log("You are one step away");
} else if (age < 19 && card === "No Card") {
    console.log("You are 2 step away");
}
