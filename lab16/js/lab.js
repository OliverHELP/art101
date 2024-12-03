// index.js - Lab 16: JSON and APIs
// Author: Oliver Winkler
// Date:12/2/2024


function update(){


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: " https://api.waifu.pics/sfw/dance",

    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function (data) {
        // do stuff
        //$("#output").append(comicObj.img);
        $("#output").append(
            $("<img>", {
                src: data.url,
                class: "uniform"
            })
        );
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
        $("#output").append()
    }
})

}
$("#get").click(function(){

update();

});