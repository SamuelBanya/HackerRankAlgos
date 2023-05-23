// Just create a 'sum' variable, loop through the sequence, add to the 'sum' variable, and just return the 'sum' variable
// when the loop is finished:
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here

    let sum = 0;
    // Loop through values:
    for (let i = 0; i < ar.length; i++) {
        console.log("ar[" + i + "]: " + ar[i]);
        sum += ar[i];
        console.log("sum: " + sum);
    }

    console.log("sum (after loop): " + sum);

    return sum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
