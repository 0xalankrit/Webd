//Detect the language by code
//If blank then not detected
//en==English
//fr==French
//es==Spanish

let code = "du";
if (code==="en") {
console.log("Hurray! Language Detected");
console.log("Language is English");
} else if (code === "fr") {
    console.log("Hurray! Lanugage Detected");
    console.log("Language in French");
} else if (code === "es") {
    console.log("Hurray! Lanugage Detected");
    console.log("Language in Spanish");
} else {
    console.log("Language not detected");
}


//Find the greatest between 3 numbers
let a = 100;
let b = 200;
let c = 300;
if (a > b && a > c) {
console.log("A is the greatest");
} else if (b> a && b > c) {
console.log("B is the greatest");
} else {
I
console.log("C is greater");
}


//Calculator
let l = 4;
let m = 5;
let result;
let cal = "MUL";

if (cal ==="ADD") {
    result = l + m;
} else if (cal ==="DIV"){
    result = l / m;
} else if (cal ==="SUB") {
    result = l - m;
} else {
    result = l * m;
}

console.log(result);

//String Handling
let str = "Hello World";
let res;
//0=="Hello"
//1=="World"
let num = 0;
let arr = str.split(" ");
if (num == 0) {
let arr = str.split(" ");
res = arr[0];
} else {
let arr = str.split(" ");
res = arr [1];
}
console.log(res);

