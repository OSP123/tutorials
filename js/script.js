$( document ).ready(function() {
	var appID = "a4b0ab90a28dc5c1f397f762eb6efe76";

   	$(".query_btn").click(function(){

    	var query_param = $(this).prev().val();

    	if ($(this).prev().attr("placeholder") == "City") {
    		var weather = "api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "Zip Code") {
    		var weather = "api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "GeoLocation") {
    		// var weather = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + appID;
    	}

    	$.getJSON(weather,function(result){
	        alert("City: "+result.city.name);
	        alert("Weather: "+ result.list[0].weather[0].description);
    	});
    })


   	
});