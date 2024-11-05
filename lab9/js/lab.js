// index.js - Lab 9 Libraries & jQuery
// Author: Oliver Winkler
// Date:11/04/2024

// Constants

// Functions

/*

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});


$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
*/


//test function


$(".sectionbox").append("<button class='buton'> Make special </button>");
$(".sectionbox button").click(function(){
    $(this).parent().toggleClass("special");
})

