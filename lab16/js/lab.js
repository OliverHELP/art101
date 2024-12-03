// index.js - Lab 16: JSON and APIs
// Author: Oliver Winkler
// Date:12/2/2024



// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json/",
    // The data to send (will be converted to a query string)
    comicObj: {
        // here is where any data required by the api 
        //   goes (check the api docs)
        month: "12",
        num: 3019,
        link: "",
        year: "2024",
        news: "",
        safe_title: "Advent Calendar Advent Calendar",
        transcript: "",
        alt: "The growth rate of items per day may may seem absurd, but it's actually much less than the acceleration in the 12 Days of Christmas song.",
        img: "https://imgs.xkcd.com/comics/advent_calendar_advent_calendar.png",
        title: "Advent Calendar Advent Calendar",
        day: "2"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function (comicObj) {
        // do stuff
        //$("#output").append(comicObj.img);
        $("#output").append("<h3>" + comicObj.title + "</h3>" + "<img>" + comicObj.img + "</img>" + comicObj.alt);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
        $("#output").append()
    }
})

