// index.js - Lab 12: Conditionals
// Author: Oliver Winkler
// Date:11/013/2024



// Create a function sortingHat()
function sortingHat(str) {
  len = str.length;
  mod = len % 4;

  if (mod == 1) {
    return "Gryffindor"
  }
  else if (mod == 2) {

    return "Ravenclaw"
  }
  else if (mod == 3) {

    return "Hufflepuff"
  }
  else {

    return "Slytherin"
  }


}


var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

})
