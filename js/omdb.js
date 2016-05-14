$( document ).ready(function() {
	$("#omdb_submit").click(function(){
		//Gather values from the other fields and store them into variables.
		var title = $("#title").val();
		var year = $("#year").val(); 
		// Concatenate those variables to a query string.
		var queryString = "http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=short&r=json";
		// Put that query string into the AJAX request
		alert(queryString);
		$.ajax({
            url: queryString, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            method: 'GET'
        }).done(function(response) {
        	$("#output").html(response);
        });
		// Output data into output container
	});
});