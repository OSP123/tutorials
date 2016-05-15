$( document ).ready(function() {
	var appID = "7c3832ce234904f30881f09806b7a6d7";

   	$(".query_btn").click(function(){

    	var query_param = $(this).prev().val();

    	if ($(this).prev().attr("placeholder") == "City") {
    		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial&APPID=" + appID;
    	} else if ($(this).prev().attr("placeholder") == "Zip Code") {
    		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&units=imperial&APPID=" + appID;
    	} 

        $.getJSON(weatherUrl,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })

    var fahrenheit = true;

	$("#convertToCelsius").click(function() {
		if (fahrenheit) {
			$("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
		}
		fahrenheit = false;
	});

	$("#convertToFahrenheit").click(function() {
		if (fahrenheit == false) {
			$("#temperature").text((($("#temperature").text() * (9/5)) + 32));
		}
		fahrenheit = true;
	});

});