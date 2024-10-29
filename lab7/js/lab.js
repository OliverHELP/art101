// index.js - Lab 7 Functions
// Author: Oliver Winkler
// Date:10/28/2024

// Constants

// Functions
function main() {
    console.log("Main function started.");
    // the code that makes everything happen
}

function sortUserName() {

    var userName = window.prompt("Input your name");
    console.log("userName=", userName);
    // take input transform into an array, then sort, and then join
    var sortedName = userName.split('').sort().join('');
    console.log("sortedName =", sortedName);

    return sortedName;

}


// output
document.writeln("Here is you name sorted: " + sortUserName(), "<br>");

// let's get this party started
//main();

