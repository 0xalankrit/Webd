let d = new Date();
console.log(d);
console.log(d instanceof Date);

//d=new Date(year.month, day, hour, minute, seconds, milliseconds)

d = new Date(2021);
console.log(d);

//1900+8
d = new Date(8,00);
console.log(d);


d = new Date("aug 13, 2019 10:20:35");
d = "aug 13, 2019 10:20:35";
console.log(typeof d);

d = new Date();
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toString());


// ISO "2015-03-25"
// Short "03/25/2015"
// Long "Mar 25 2015" or "25 Mar 2015"
d = new Date("2015-03-25");
console.log(d);
d = new Date("03/25/2015");
console.log(d);
d = new Date("Mar 25 2015");
console.log(d);

// UTC (Universal Time Coordinated)
d = new Date("2021-07-26T10:37:40.652");
console.log(d);

d = Date.parse("25 March, 2021");
console.log(d);

d = new Date();
//Get Methods
console.log(d.getMonth());

//Set
d = new Date();
d = d.setMonth (2015);
console.log(d);