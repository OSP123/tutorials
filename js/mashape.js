$( document ).ready(function() {

	$(".yoda_button").click(function(){

        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
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
                var str = JSON.stringify(data, null, 4);
                $("#output").html(str);
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
