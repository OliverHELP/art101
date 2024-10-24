// index.js - lab 6 Arrays and Objects
// Author: Oliver Winkler
// Date:10/23/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}


//Define Variables

myTransport = [" bus", " car" , " plane"]

myMainRide = {

  make: "Toyota",
  model: "tacoma",
  year: 2015,
  age: function () {
      return 2024-this.year;
  }
}

// output
document.writeln("Getting around: " + myTransport + "<br>")


document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// let's get this party started
main();
