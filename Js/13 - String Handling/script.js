var text ="This is javascript"
var length =text.length;
console.log(length);

console.log(text.slice(0,4))
console.log(text.slice(1,4))
console.log(text.slice(8,18))
console.log(text.slice(-1,-10))
console.log(text.slice(-10))
console.log(text.slice(7))


console.log(text.substring(0,5))
// console.log(text.substr(0,5))

console.clear();
// console.log(text.replace("javascript","HTML"));
// console.log(text.replace("javascript","HTML").replace("HTML","CSS"));

// console.log(text.replace(/javascript/g,"HTML"));


// console.log(text.toUpperCase())
console.log(text.toLowerCase())


let txt1 ="This is js"
let txt2 ="This is a good language"

console.log(txt1+txt2);

// console.log(txt1.concat(" ",txt1, " ",txt2));

console.log("txt1".concat("txt1","txt2"));

txt2 ="       this       is js"
txt2.trim()
console.log(txt2);

// let id =33717
// id.padStart(0,4)

let m ="5"
console.log(m.padStart(4,"0"))
console.log(m.padEnd(4,"0"))

txt2 ="Hello World ? How are you"
console.log(txt2.charAt(4));
console.log(txt2.charCodeAt(4));


console.log(txt2[4]);

txt2[4]="j";
console.log(txt2);

console.log(txt2.split("?"))