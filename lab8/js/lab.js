// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Oliver Winkler
// Date:10/30/2024
//Help from chatgpt

// Constants

// Functions
function sqr(x) {
    return x * x;
}


//test function

console.log("what is the square of 3", sqr(3));
console.log("what is the square of 4", sqr(4));



array = [7, 9, 12, 2, 13, 14, 5]
console.log("My array", array)


var result = array.map(sqr);
// should return [49, 81, 144, 4, 169, 196, 25, 608]
console.log("Test for squaring an array", result);

var anonExample = array.map(function (x) {
    return (x % 2 !== 0);
})

$("#output").html(anonExample.join(", "));




//should return [true, true, false, false, true, false, true, false]
console.log("Test of odd numbers in the array", anonExample);

//anon callback functon that checks is something is odd

array.map(function (x) {
    return (x % 2 !== 0);
})


