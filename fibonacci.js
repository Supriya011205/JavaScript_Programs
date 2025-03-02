function fibonacciGenerator (n) {
    var output = [];
    var count = 0;
    var firstfib = 0;
    var nextfib = 1;
    var totalfib = 0;
    for (var i = 0; i < n; i++) {
        output.push(firstfib);
        
        totalfib = firstfib + nextfib;
        firstfib = nextfib;
        nextfib = totalfib;
    }
    return output;
}

console.log(fibonacciGenerator(10));
