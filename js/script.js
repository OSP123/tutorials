$( document ).ready(function() {
	var appID = "7c3832ce234904f30881f09806b7a6d7";

   	$(".query_btn").click(function(){

    	var query_param = $(this).prev().val();

    	if ($(this).prev().attr("placeholder") == "City") {
    		var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "Zip Code") {
    		var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "GeoLocation") {
    		// var weather = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + appID;
    	}

        $.getJSON(weather,function(json){
            $("#city") = json.name;
            $("#main_weather") = json.weather[0].main;
            // $("#city") = json.name;
            // $("#city") = json.name;
            // $("#city") = json.name;
        });
    })


   	
});