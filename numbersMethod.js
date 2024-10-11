var myMarks = "100";
//myMarks = parseInt(myMarks);
myMarks = Number(myMarks); //it work on both 
myMarks = myMarks + 50;
console.log(myMarks);

//Number(); is used to convert string  into Number. 
//parseInt(); is used to convert data into int.
//parseFloat(); is used to convert data into float.

//isFinite();
var cake = 100;
var pieces = cake / 3;
var bool = isFinite(pieces);
console.log(bool);

//isIntegar();
var integar1 = "abc";
var integar2 = 123;
var r = Number.isInteger(integar1); // Should return false
var s = Number.isInteger(integar2); // Should return true

console.log(r + s); // This will print 1 because false (0) + true (1) = 1

//toFixed();
var numb = 123.456789;
var fixedNum = numb.toFixed(2); // This will round the number to 2 decimal places
console.log(fixedNum); // Output: "123.46"

//toPrecision();
var numbers = 5.5;
var t = numbers.toPrecision(1);
console.log(t);

