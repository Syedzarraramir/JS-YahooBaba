var string = "JavaScript";
var a = string.length;
//it will show the length
console.log(a);

//To Lower Case
var string = "JavaScript";
var b = string.toLowerCase();
//it will show the length
console.log(b);

//To Upper Case
var string = "JavaScript";
var c = string.toUpperCase();
//it will show the length
console.log(c);

//To Search Word
var string = "Java Script";
var d = string.includes("Script");
//it will show the length
console.log(d);

//It Shows the Word Start With
var string = "JavaScript";
var e = string.startsWith("J");
//it will show the length
console.log(e);

//It Show the word end with
var string = "JavaScript";
var f = string.endsWith("t");
//it will show the length
console.log(f);

//It Return the Position
var string = "JavaScript";
var g = string.search("S");
//it will show the length
console.log(g);

//It will Replace the words
var string = "JavaScript";
var h = string.replace(/Script/g, "High Level Language");
//It will show the length of the result string
console.log(h.length);

//It will remove extra spaces from left & right
var trim = "  My Name is Zarrar . ";
var j = trim.length; //length is property not a method so it does not need parenthesis
console.log("The Length Before Trim Is : " + j);
var i = trim.trim();
console.log(i);
var k = i.length;  //length is property not a method so it does not need parenthesis
console.log("The Length After Trim Is : " + k);

//charAt();
var charAt = "Java Script Is A Great Language.";
var l = charAt.charAt(2);
console.log(l);

//charCodeAt();
var charCodeAt = "My Name Is Zarrar.";
var m = charCodeAt.charCodeAt(4);
console.log(m);
//fromCharacterCode();
var n = String.fromCharCode(100);
console.log(n);

//concat();
var string1 = "Owais ";
var string2 = "Adnan ";
var string3 = "Zarrar";
var o = string1.concat(string2);  
o = o.concat(string3);            
console.log(o); 

//split();
var split = ("Awais Ahamd");
var p = split.split(" ");
console.table(p);

var firstName = p[0];
var middleName = p[1];
var lastName = p[2];
console.log("Assalam o Alykom Hi How are You Nice to Meet You It Means That Your First Name is : " + firstName + " Your Mid Name is : " + middleName + " Your Last Name is : " + lastName + " Have A Nice Day MR " + split);

//repeat();
var repeat = "I am Syed Zarrar Amir"
var q = repeat.repeat(5);
console.log(q);

