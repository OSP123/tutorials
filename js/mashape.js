$( document ).ready(function() {

	// $(".text_process").click(function(){

 //        var input = $(this).prev().val();

 //        $.getJSON("//loudelement-free-natural-language-processing-service.p.mashape.com/nlp-text/?text=" + convertedInput, function( data ) {
 //           $('#output').append(data.contents.translated);
 //        });
 //    });

    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {sentence: $("#boxArea").val()}, // Additional parameters here
        datatype: 'json',
        success: function (data) {
            alert(data);
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "WiNaHz5SylmshT0YdDN3OQxNVf5np1xQoxNjsnpmJSREuIgvnp"); // Enter here your Mashape key
        }
    });

    // $(".query_btn").click(function(){

    //     var query_param = $(this).prev().val();

    //     if ($(this).prev().attr("placeholder") == "City") {
    //         var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial&APPID=" + appID;
    //     } else if ($(this).prev().attr("placeholder") == "Zip Code") {
    //         var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&units=imperial&APPID=" + appID;
    //     } 

    //     $.getJSON(weather,function(json){
    //         $("#city").html(json.name);
    //         $("#main_weather").html(json.weather[0].main);
    //         $("#description_weather").html(json.weather[0].description);
    //         $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
    //         $("#temperature").html(json.main.temp);
    //         $("#pressure").html(json.main.pressure);;
    //         $("#humidity").html(json.main.humidity);;
    //     });
    // })

});
