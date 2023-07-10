const myObject = {
  name: "apurbo",
  estd: "1998"
};
// printing keys only:
var keys = Object.keys(myObject);
console.log(`Keys are: ${keys}`);
// printing values only:
var values = Object.values(myObject);
console.log(`Values are ${values}`);
// printing Keys and values:
var entries = Object.entries(myObject);
console.log(entries);

// object short hand:
var a = 5;
var b = 5;
var z = a * b;
var newObj = {
  name: "apurbo",
  estd: "1998",
  a,
  b,
  z
};
