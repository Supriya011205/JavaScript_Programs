// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
    count++;
  } else if (count % 3 === 0){
    output.push("Fizz");
    count++;
  } else if (count % 5 === 0) {
    output.push("Buzz");
    count++;
  } else {
    output.push(count);
    count++;
  }
  console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
