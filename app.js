console.log("Loading samples ...");
var samples = require('./samples/samples.js');
console.log("OK");
console.log("");

function subUsingReduce(tab) {
    var sum = tab.reduce(function (pv, cv) {
        return pv + cv
    }, 0)

    console.log("Using reduce :");

    return sum;
}

function subUsingLoop(tab) {
    var sum = 0

    for (var i = 0, n=tab.length; i < n; i++) {
        sum+=tab[i];
    }

    console.log("Using reverse loop :");

    return sum;
}

function subUsingReverseLoop(tab) {
    var sum = 0

    for (var i = tab.length; i--;) {
        sum+=tab[i];
    }

    console.log("Using reverse loop :");

    return sum;
}

function subUsingWhileReverseLoop(tab) {
    var sum = 0
    var i = tab.length

    while (i--) {
        sum+=tab[i];
    }

    console.log("Using while reverse loop :");

    return sum;
}

function maxSubArraySum(tab) {
    // write your code here
    switch (process.argv[2]) {
        case 'reduce' : return subUsingReduce(tab);
        case 'loop' : return subUsingLoop(tab);
        case 'rloop' : return subUsingReverseLoop(tab);
        case 'rwloop' : return subUsingWhileReverseLoop(tab);
        default : throw "argument not matching any method."
    }
}

function test(sample) {
    console.log("== Test maxSubArraySum on a presumed " + sample.size + " elements array == ")
    var start = new Date().getTime();
    var result = maxSubArraySum(sample.tab);
    var end = new Date().getTime();
    console.log(result);
    console.log("Expected => " + sample.result);
    if (result !== sample.result) {
        console.log("Error : Bad result on following tab with size of :");
        console.log(JSON.stringify(sample.size));
    }
    console.log("Execution time : " + (end - start) + "ms");

    console.log("");
}

function main() {
    // mode = "dev" // samples array from 1 to 10 elements
    // mode = "test" // samples array from 1 to 5 000 elements
    // mode = "huge" // samples array from 1 to 10 000 000 elements
    // mode = "huge2" // samples array from 1 to 10 000 000 elements

    var mode

    switch (process.argv[3]) {
        case 'dev' : mode = "dev";
        case 'test' : mode = "test";
        case 'huge' : mode = "huge";
        case 'huge2' : mode = "huge2";
        default : mode = "dev";
    }

    var samplesToTest = samples[mode];
    for (var i = 0; i < samplesToTest.length; i++) {
        test(samplesToTest[i]);
    }
}

main();