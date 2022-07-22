var text ="Please locate where ,'locate' word is ?";

console.log(text.indexOf('locate'));
console.log(text.indexOf('where'));

console.log(text.indexOf('hello'));

console.log(text.lastIndexOf('locate'));

console.log(text.indexOf('locate',6));
console.log(text.search("locate"))

console.log(text.match("locate"))
console.log(text.match(/locate/g))


console.log(text.includes("Please"))
console.log(text.includes("Please",8))


console.log(text.startsWith(/locate/g,7))
console.log(text.endsWith(/locate/g,14))