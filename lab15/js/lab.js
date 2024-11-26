// index.js - Lab 15: AJAX
// Author: Oliver Winkler
// Date:11//2024


$("#attempt").click(function(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu/",
    // The data to send (will be converted to a query string)
    data: {
        "count": 248,
        "next": "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
        "previous": null,
        "results": [
          {
            "name": "stench",
            "url": "https://pokeapi.co/api/v2/ability/1/"
          }
        ]
      }
      ,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("#output").html("<h1>POkemon</h1> <pre>" + JSON.stringify(data,null,4)+ "</pre>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
})



//USED AI TO MAKE THE THE CODE BELOW WORK
    // Pokemon Button Click Event
    $("#action").click(function() {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
            method: 'GET',
            success: function(pokemon) {
                // Create HTML output for Pokemon information
                let outputHTML = `
                    <h3>Pikachu Details</h3>
                    <img src="${pokemon.sprites.front_default}" alt="Pikachu">
                    <div>
                        <p><strong>Name:</strong> ${pokemon.name.toUpperCase()}</p>
                        <p><strong>ID:</strong> ${pokemon.id}</p>
                        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
                        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
                        <p><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                `;
                
                // Display output in the #output div
                $("#output").html(outputHTML);
            },
            error: function() {
                $("#output").html("Failed to load Pokemon data.");
            }
        });
    });

    // Comic Button Click Event (Now Pokédex Entry)
    $("#comic").click(function() {
        // Fetch Pikachu species information to get Pokédex entry
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon-species/pikachu',
            method: 'GET',
            success: function(species) {
                // Find the English Pokédex entry
                const englishEntry = species.flavor_text_entries.find(entry => 
                    entry.language.name === 'en'
                );

                // Create HTML output for Pokédex entry
                let outputHTML = `
                    <h3>Pikachu Pokédex Entry</h3>
                    <div>
                        <p><strong>Pokédex Description:</strong> ${englishEntry ? englishEntry.flavor_text : 'No description available'}</p>
                        
                        <h4>Additional Species Information:</h4>
                        <p><strong>Habitat:</strong> ${species.habitat ? species.habitat.name : 'Unknown'}</p>
                        <p><strong>Color:</strong> ${species.color.name}</p>
                        <p><strong>Capture Rate:</strong> ${species.capture_rate}</p>
                        <p><strong>Base Happiness:</strong> ${species.base_happiness}</p>
                        <p><strong>Growth Rate:</strong> ${species.growth_rate.name}</p>
                    </div>
                `;
                
                // Display output in the #output div
                $("#output").html(outputHTML);
            },
            error: function() {
                $("#output").html("Failed to load Pokédex entry.");
            }
        });
    });
