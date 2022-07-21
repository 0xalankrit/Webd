let marks =45;
console.log(marks, typeof marks);
marks = String(marks);

console.log(marks, typeof marks);
marks = (45).toString();
console.log(marks, typeof marks);

console.log(String(null));
// console.log(undefined.toString());

console.log(String(undefined));
// console.log(null.toString());

marks = null;
console.log(marks.toString());

let num = 10;
console.log(num, typeof num);
num = String(num);
console.log(num, typeof num);
num = Number(num);
console.log(num, typeof num);
let str = Number("qwerty");
console.log(str, typeof str);

num = "100.021325";
num = Number(num);
console.log(num, typeof num);
// num = parseInt(num);
// console.log(num, typeof num);
num = parseFloat(num);
console.log(num, typeof num);