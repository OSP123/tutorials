$( document ).ready(function() {
	var appID = "7c3832ce234904f30881f09806b7a6d7";

   	$(".query_btn").click(function(){

    	var query_param = $(this).prev().val();

    	if ($(this).prev().attr("placeholder") == "City") {
    		var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "Zip Code") {
    		var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&units=imperial&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "GeoLocation") {
    		// var weather = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=" + appID;
    		var getIP = 'https://api.ipify.org?format=jsonp&callback=getIP';
    		
			$.getJSON(getIP).done(function(location) {
			    $('#currentLocation').text(location.city + ', ' + location.region + ', ' + location.country);
				
				$.getJSON(openWeatherMap, {
			        lat: location.lat,
			        lon: location.lon,
			        units: 'metric',
			        APPID: appID
			    })

			    .done(function(weather) {
			        $('#loading').text(Math.round(weather.main.temp));
			    })
			})
    	}

        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);;
            $("#humidity").html(json.main.humidity);;
        });
    })


   	
});