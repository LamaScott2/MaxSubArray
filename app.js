console.log("Loading samples ...");
const samples = require('./samples/samples.js');
console.log("OK");
console.log("");

function usingKadaneAlgorithm(tab) {
    // Initialize max value so far with first element of the array
    let max = tab[0]
    let current = 0

    for (let i = 0; i < tab.length; i++)
    {
        current += tab[i]

        // If finding a value strictly greater than max so far, current value became the max so far
        if (max < current)
            max = current

        // If value is negative, reset the value to 0
        if (current < 0)
            current = 0
    }

    return max
}

function maxSubArraySum(tab) {
    return usingKadaneAlgorithm(tab);
}

function test(sample) {
    console.log("== Test maxSubArraySum on a presumed " + sample.size + " elements array == ")
    let start = new Date().getTime();
    let result = maxSubArraySum(sample.tab);
    let end = new Date().getTime();
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
    let mode

    switch (process.argv[2]) {
        case 'dev' :
            mode = "dev";
            break;
        case 'test' :
            mode = "test";
            break;
        case 'huge' :
            mode = "huge";
            break;
        case 'huge2' :
            mode = "huge2";
            break;
        default :
            mode = "dev";
    }

    console.log("Using Kadane's algorithm with '" + mode + "' set of samples.")

    let samplesToTest = samples[mode];

    for (let i = 0; i < samplesToTest.length; i++) {
        test(samplesToTest[i]);
    }
}

main();