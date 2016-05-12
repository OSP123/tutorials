$( document ).ready(function() {

	$(".yoda_button").click(function(){

        $.ajax({
            url: '//yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {sentence: $("#yoda_input").val()}, // Additional parameters here
            datatype: 'json',
            success: function (data) {
                $("#output").html(data);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "WiNaHz5SylmshT0YdDN3OQxNVf5np1xQoxNjsnpmJSREuIgvnp"); // Enter here your Mashape key
            }
        });

    });

    $(".text_process_button").click(function(){

        $.ajax({
            url: 'https://loudelement-free-natural-language-processing-service.p.mashape.com/nlp-text/?text=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {text: $("#text_process_input").val()}, // Additional parameters here
            datatype: 'json',
            success: function (data) {
                $("#api-author").html(data["api-author"]);
                $("#api-usage").html(data["api-usage"]);
                $("#sentiment-text").html(data["sentiment-text"]);
                $("#sentiment-score").html(data["sentiment-score"]);
                $("#status").html(data["status"]);
                $("#language").html(data["language"]);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "WiNaHz5SylmshT0YdDN3OQxNVf5np1xQoxNjsnpmJSREuIgvnp"); // Enter here your Mashape key
            }
        });

    });

    

});
