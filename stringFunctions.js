var name = prompt("What is your name?");
var firstChar = name.slice(0,1).toUpperCase();
var otherChar = name.slice(1,name.length).toLowerCase();
name = firstChar + otherChar;
alert("Hello, "+name);
