var len = prompt("Enter your message here: ");
var a = 140-len.length;
alert("You have written "+len.length+" characters, you have "+a+" characters left.");
alert(len.slice(0,140));
