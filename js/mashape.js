$( document ).ready(function() {
	var appID = "WiNaHz5SylmshT0YdDN3OQxNVf5np1xQoxNjsnpmJSREuIgvnp";

    var someString = "I am a lovely string";
    var encode = encodeURI(someString);

    console.log(encode);
    
    $.ajax({
        url: 'https://loudelement-free-natural-language-processing-service.p.mashape.com/nlp-text/?text=' + encode, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'POST', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) { console.log(JSON.stringify(data)); },
        error: function(err) { console.log(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", appID); // Enter your Mashape key here
        }
    });

});