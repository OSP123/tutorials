$( document ).ready(function() {
	$("#omdb_submit").click(function(){
		//Gather values from the other fields and store them into variables.
		var title = $("#title").val();
		var year = $("#year").val(); 
		// Concatenate those variables to a query string.
		// Note: If you get errors about mixed protocols, then just change the url below to be in https format
		var queryString = "https://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=short&r=json";
		// Put that query string into the AJAX request
		$.ajax({
            url: queryString, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            method: 'GET'
        }).done(function(response) {
        	if(response.length < 1) {
        		$("#output").html("Sorry, no movies were found :(");
    		} else {
    			$("#output").html(JSON.stringify(response));

    			var movieContainer = $('<div class="movie_Container">');
    			$(".pretty_movie_output").append(movieContainer);

    			for(var prop in response) {
    				var element;
    				if (prop == "Poster" && response[prop] != "N/A") {
    					element = $("<img class='pretty'>").attr("src", response[prop]);
    				} else {
    					element = $("<h3 class='pretty'>").text(prop + ": " + response[prop]);
    				}
	     
	        		movieContainer.append(element);
				}
    		}
        });
		// Output data into output container
	});
});